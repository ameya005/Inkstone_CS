from pydantic import BaseModel
from typing import List, Optional, Dict, Any
from enum import Enum
import uuid
from datetime import datetime

class DifficultyLevel(str, Enum):
    EASY = "easy"
    MEDIUM = "medium"
    HARD = "hard"

class QuestionCategory(str, Enum):
    ARRAY = "array"
    STRING = "string"
    LINKED_LIST = "linked_list"
    TREE = "tree"
    GRAPH = "graph"
    DYNAMIC_PROGRAMMING = "dynamic_programming"
    GREEDY = "greedy"
    BACKTRACKING = "backtracking"
    BINARY_SEARCH = "binary_search"
    SORTING = "sorting"
    HASH_TABLE = "hash_table"
    STACK = "stack"
    QUEUE = "queue"

class QuestionExample(BaseModel):
    input: str
    output: str
    explanation: Optional[str] = None

class Question(BaseModel):
    id: str
    title: str
    difficulty: DifficultyLevel
    category: QuestionCategory
    description: str
    examples: List[QuestionExample]
    constraints: List[str]
    hints: List[str] = []
    companies: List[str] = []

class ChatMessage(BaseModel):
    role: str  # "user" or "assistant"
    content: str
    timestamp: datetime

class InterviewSession(BaseModel):
    session_id: str
    question: Question
    user_code: str = ""
    conversation: List[ChatMessage] = []
    start_time: datetime
    scores: Dict[str, float] = {}  # {"code_quality": 8.5, "communication": 7.0, etc.}
    feedback: List[str] = []

class CodeSubmission(BaseModel):
    session_id: str
    code: str
    language: str = "python"

class ChatRequest(BaseModel):
    session_id: str
    message: str

class StartSessionRequest(BaseModel):
    difficulty: Optional[DifficultyLevel] = None
    category: Optional[QuestionCategory] = None

class EvaluationResult(BaseModel):
    scores: Dict[str, float]
    feedback: List[str]
    suggestions: List[str]
    overall_score: float