from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Import routers directly; let Python raise ImportError if any are missing
from app.api import questions, sessions, chat

app = FastAPI(
    title="Interview Coach API",
    description="AI-powered coding interview practice platform",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers only if imported successfully

# Include routers
app.include_router(questions.router, prefix="/api/questions", tags=["questions"])
app.include_router(sessions.router, prefix="/api/sessions", tags=["sessions"])
app.include_router(chat.router, prefix="/api/chat", tags=["chat"])
print("✅ All routers included")
async def health_check():
    return {"status": "healthy", "service": "interview-coach-api"}

@app.get("/test-questions")
async def test_questions():
    from app.services.question_service import QuestionService
    qs = QuestionService()
    return {"count": qs.get_question_count(), "questions": len(qs._questions)}

@app.get("/api/test")
async def test_api():
    return {"message": "API endpoint working", "test": True}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)