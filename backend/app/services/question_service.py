import json
import random
from typing import List, Optional
from pathlib import Path
from app.models import Question, DifficultyLevel, QuestionCategory

class QuestionService:
    def __init__(self):
        # Try multiple possible paths
        possible_paths = [
            Path(__file__).parent.parent / "data" / "questions.json",
            Path.cwd() / "app" / "data" / "questions.json",
            Path.cwd() / "data" / "questions.json",
            Path("/Users/ameyajoshi/Projects/Inkstone_CS/backend/app/data/questions.json")
        ]

        self.questions_file = possible_paths[0]  # Default
        for path in possible_paths:
            if path.exists():
                self.questions_file = path
                break

        self._questions: List[Question] = []
        self._load_questions()

    def _load_questions(self):
        """Load questions from JSON file"""
        try:
            print(f"Looking for questions file at: {self.questions_file}")
            print(f"File exists: {self.questions_file.exists()}")

            if self.questions_file.exists():
                with open(self.questions_file, 'r') as f:
                    questions_data = json.load(f)
                    print(f"Loaded {len(questions_data)} questions from JSON")
                    self._questions = [Question(**q) for q in questions_data]
                    print(f"Successfully created {len(self._questions)} question objects")
            else:
                print("Questions file does not exist, creating empty file")
                # Create empty questions file if it doesn't exist
                self._questions = []
                self._save_questions()
        except Exception as e:
            print(f"Error loading questions: {e}")
            import traceback
            traceback.print_exc()
            self._questions = []

    def _save_questions(self):
        """Save questions to JSON file"""
        try:
            self.questions_file.parent.mkdir(parents=True, exist_ok=True)
            with open(self.questions_file, 'w') as f:
                questions_data = [q.model_dump() for q in self._questions]
                json.dump(questions_data, f, indent=2, default=str)
        except Exception as e:
            print(f"Error saving questions: {e}")

    async def get_random_question(
        self,
        difficulty: Optional[DifficultyLevel] = None,
        category: Optional[QuestionCategory] = None
    ) -> Optional[Question]:
        """Get a random question based on filters"""
        filtered_questions = self._questions

        if difficulty:
            filtered_questions = [q for q in filtered_questions if q.difficulty == difficulty]

        if category:
            filtered_questions = [q for q in filtered_questions if q.category == category]

        if not filtered_questions:
            return None

        return random.choice(filtered_questions)

    async def get_questions(
        self,
        difficulty: Optional[DifficultyLevel] = None,
        category: Optional[QuestionCategory] = None,
        limit: int = 10
    ) -> List[Question]:
        """Get a list of questions with optional filters"""
        filtered_questions = self._questions

        if difficulty:
            filtered_questions = [q for q in filtered_questions if q.difficulty == difficulty]

        if category:
            filtered_questions = [q for q in filtered_questions if q.category == category]

        return filtered_questions[:limit]

    async def get_question_by_id(self, question_id: str) -> Optional[Question]:
        """Get a question by its ID"""
        for question in self._questions:
            if question.id == question_id:
                return question
        return None

    def add_question(self, question: Question):
        """Add a new question (for scraping script)"""
        self._questions.append(question)
        self._save_questions()

    def add_questions(self, questions: List[Question]):
        """Add multiple questions (for bulk import)"""
        self._questions.extend(questions)
        self._save_questions()

    def get_question_count(self) -> int:
        """Get total number of questions"""
        return len(self._questions)