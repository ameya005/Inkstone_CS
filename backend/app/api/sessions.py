from fastapi import APIRouter, HTTPException
from typing import Dict, Any
from app.models import (
    InterviewSession,
    StartSessionRequest,
    CodeSubmission,
    EvaluationResult
)
from app.services.question_service import QuestionService
from app.services.session_store import SessionStore
import uuid
from datetime import datetime

router = APIRouter()
question_service = QuestionService()
session_store = SessionStore()

@router.post("/start", response_model=InterviewSession)
async def start_interview_session(request: StartSessionRequest):
    """Start a new interview session with a random question"""
    try:
        # Get a random question based on preferences
        question = await question_service.get_random_question(
            difficulty=request.difficulty,
            category=request.category
        )

        if not question:
            raise HTTPException(status_code=404, detail="No questions available")

        # Create new session
        session_id = str(uuid.uuid4())
        session = InterviewSession(
            session_id=session_id,
            question=question,
            start_time=datetime.now()
        )

        # Store session in database
        session_store.create_session(session)

        return session
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{session_id}", response_model=InterviewSession)
async def get_session(session_id: str):
    """Get an existing interview session"""
    session = session_store.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    return session

@router.post("/{session_id}/submit-code", response_model=EvaluationResult)
async def submit_code(session_id: str, submission: CodeSubmission):
    """Submit code for evaluation"""
    session = session_store.get_session(session_id)
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    # Update code in storage
    session_store.update_session_code(session_id, submission.code, submission.language)

    # TODO: Implement actual code evaluation
    # For now, return mock evaluation
    mock_result = EvaluationResult(
        scores={
            "correctness": 8.5,
            "code_quality": 7.0,
            "efficiency": 6.5
        },
        feedback=[
            "Good use of appropriate data structure",
            "Consider edge cases for empty input"
        ],
        suggestions=[
            "Add input validation",
            "Consider time complexity optimization"
        ],
        overall_score=7.3
    )

    # Update session scores and feedback in storage (would be part of session_store.update_evaluation)

    return mock_result

@router.post("/{session_id}/update-code")
async def update_session_code(session_id: str, submission: CodeSubmission):
    """Update the session's current code without evaluation"""
    success = session_store.update_session_code(session_id, submission.code, submission.language)
    if not success:
        raise HTTPException(status_code=404, detail="Session not found")

    return {"message": "Code updated successfully", "session_id": session_id}

@router.delete("/{session_id}")
async def end_session(session_id: str):
    """End an interview session"""
    success = session_store.delete_session(session_id)
    if not success:
        raise HTTPException(status_code=404, detail="Session not found")

    return {"message": "Session ended successfully"}