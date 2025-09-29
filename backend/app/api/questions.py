from fastapi import APIRouter, HTTPException
from typing import List, Optional
from app.models import Question, DifficultyLevel, QuestionCategory
from app.services.question_service import QuestionService

router = APIRouter()
question_service = QuestionService()

@router.get("/random", response_model=Question)
async def get_random_question(
    difficulty: Optional[DifficultyLevel] = None,
    category: Optional[QuestionCategory] = None
):
    """Get a random question based on difficulty and category filters"""
    try:
        question = await question_service.get_random_question(difficulty, category)
        if not question:
            raise HTTPException(status_code=404, detail="No questions found matching criteria")
        return question
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/", response_model=List[Question])
async def get_questions(
    difficulty: Optional[DifficultyLevel] = None,
    category: Optional[QuestionCategory] = None,
    limit: int = 10
):
    """Get list of questions with optional filters"""
    try:
        questions = await question_service.get_questions(difficulty, category, limit)
        return questions
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{question_id}", response_model=Question)
async def get_question_by_id(question_id: str):
    """Get a specific question by ID"""
    try:
        question = await question_service.get_question_by_id(question_id)
        if not question:
            raise HTTPException(status_code=404, detail="Question not found")
        return question
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))