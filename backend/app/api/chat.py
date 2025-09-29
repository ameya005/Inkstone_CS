from fastapi import APIRouter, HTTPException
from app.models import ChatRequest, ChatMessage, InterviewSession
from app.services.openai_service import OpenAIService
from app.services.session_store import SessionStore
from app.services.context_manager import ContextManager
from datetime import datetime

router = APIRouter()
openai_service = OpenAIService()
session_store = SessionStore()
context_manager = ContextManager(session_store)

def _check_for_interview_end(ai_response: str) -> tuple[str, bool]:
    """
    Parse AI response for termination signal
    Returns: (cleaned_response, should_end)
    """
    if "<end_interview>" in ai_response:
        cleaned = ai_response.replace("<end_interview>", "").strip()
        return cleaned, True
    return ai_response, False

@router.post("/{session_id}/message")
async def chat_with_interviewer(session_id: str, request: ChatRequest):
    """Send a message to the AI interviewer"""
    session = session_store.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    # Add user message to conversation
    user_message = ChatMessage(
        role="user",
        content=request.message,
        timestamp=datetime.now()
    )
    session_store.add_message(session_id, user_message)

    try:
        # Get recent conversation messages (last 10) to preserve full context
        # This ensures problem context and conversation flow are maintained
        recent_messages = session_store.get_recent_messages(session_id, limit=10)

        # Format messages for AI (simple format, no summarization)
        formatted_messages = []
        for msg in recent_messages:
            formatted_messages.append({
                "role": msg.role,
                "content": msg.content
            })

        ai_response = await openai_service.get_interviewer_response(
            question=session.question,
            context_messages=formatted_messages,
            user_code=session.user_code
        )

        # Check for interview termination
        cleaned_response, should_end_interview = _check_for_interview_end(ai_response)

        # Add AI message to conversation (with cleaned response)
        ai_message = ChatMessage(
            role="assistant",
            content=cleaned_response,
            timestamp=datetime.now()
        )
        session_store.add_message(session_id, ai_message)

        result = {
            "message": cleaned_response,
            "session_id": session_id
        }

        # If interview should end, trigger evaluation
        if should_end_interview:
            try:
                # Get full conversation for evaluation
                full_session = session_store.get_session(session_id)

                # Trigger interview evaluation
                evaluation = await openai_service.evaluate_interview(
                    question=full_session.question,
                    conversation=full_session.conversation,
                    final_code=full_session.user_code
                )

                result["interview_ended"] = True
                result["evaluation"] = evaluation

            except Exception as eval_error:
                print(f"Error during interview evaluation: {eval_error}")
                result["interview_ended"] = True
                result["evaluation"] = {
                    "scores": {"overall": 5},
                    "recommendation": "BORDERLINE",
                    "feedback": "Interview completed but evaluation failed. Please review manually."
                }

        return result

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get AI response: {str(e)}")

@router.get("/{session_id}/conversation")
async def get_conversation(session_id: str):
    """Get the conversation history for a session"""
    session = session_store.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    return {
        "session_id": session_id,
        "conversation": session.conversation
    }