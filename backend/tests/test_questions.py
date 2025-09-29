import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_health_check():
    """Test basic health check endpoint"""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json()["status"] == "healthy"

def test_get_random_question():
    """Test getting a random question"""
    response = client.get("/api/questions/random")

    # Should return 404 if no questions in database initially
    if response.status_code == 404:
        assert "No questions found" in response.json()["detail"]
    else:
        assert response.status_code == 200
        data = response.json()
        assert "id" in data
        assert "title" in data
        assert "difficulty" in data
        assert "category" in data

def test_get_questions_list():
    """Test getting list of questions"""
    response = client.get("/api/questions/")
    assert response.status_code == 200

    # Should return empty list if no questions
    data = response.json()
    assert isinstance(data, list)

def test_get_questions_with_filters():
    """Test getting questions with difficulty filter"""
    response = client.get("/api/questions/?difficulty=easy&limit=5")
    assert response.status_code == 200

    data = response.json()
    assert isinstance(data, list)
    assert len(data) <= 5

def test_start_interview_session():
    """Test starting an interview session"""
    # This will fail without questions in database
    response = client.post("/api/sessions/start", json={})

    if response.status_code == 404:
        assert "No questions available" in response.json()["detail"]
    else:
        assert response.status_code == 200
        data = response.json()
        assert "session_id" in data
        assert "question" in data

def test_invalid_session_id():
    """Test accessing invalid session"""
    response = client.get("/api/sessions/invalid-id")
    assert response.status_code == 404
    assert "Session not found" in response.json()["detail"]