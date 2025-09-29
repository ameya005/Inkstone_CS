"""
Persistent session storage using SQLite
Better than in-memory storage for interview history and code context
"""

import sqlite3
import json
import uuid
from datetime import datetime
from typing import List, Optional, Dict, Any
from pathlib import Path
from app.models import InterviewSession, ChatMessage, Question

class SessionStore:
    def __init__(self, db_path: str = "interview_sessions.db"):
        self.db_path = Path(db_path)
        self.init_database()

    def init_database(self):
        """Initialize SQLite database with required tables"""
        with sqlite3.connect(self.db_path) as conn:
            # Sessions table
            conn.execute("""
                CREATE TABLE IF NOT EXISTS sessions (
                    session_id TEXT PRIMARY KEY,
                    question_data TEXT NOT NULL,  -- JSON serialized Question
                    user_code TEXT DEFAULT '',
                    start_time TEXT NOT NULL,
                    scores TEXT DEFAULT '{}',     -- JSON serialized scores
                    feedback TEXT DEFAULT '[]',   -- JSON serialized feedback
                    status TEXT DEFAULT 'active',
                    created_at TEXT DEFAULT CURRENT_TIMESTAMP
                )
            """)

            # Messages table for conversation history
            conn.execute("""
                CREATE TABLE IF NOT EXISTS messages (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_id TEXT NOT NULL,
                    role TEXT NOT NULL,
                    content TEXT NOT NULL,
                    timestamp TEXT NOT NULL,
                    FOREIGN KEY (session_id) REFERENCES sessions (session_id)
                )
            """)

            # Code snapshots table (for tracking code evolution)
            conn.execute("""
                CREATE TABLE IF NOT EXISTS code_snapshots (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    session_id TEXT NOT NULL,
                    code TEXT NOT NULL,
                    language TEXT DEFAULT 'python',
                    timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
                    FOREIGN KEY (session_id) REFERENCES sessions (session_id)
                )
            """)

            conn.commit()

    def create_session(self, session: InterviewSession) -> str:
        """Create a new interview session"""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                INSERT INTO sessions (session_id, question_data, user_code, start_time, scores, feedback)
                VALUES (?, ?, ?, ?, ?, ?)
            """, (
                session.session_id,
                json.dumps(session.question.dict()),
                session.user_code,
                session.start_time.isoformat(),
                json.dumps(session.scores),
                json.dumps(session.feedback)
            ))
            conn.commit()
        return session.session_id

    def get_session(self, session_id: str) -> Optional[InterviewSession]:
        """Get session by ID with conversation history"""
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row

            # Get session data
            session_row = conn.execute("""
                SELECT * FROM sessions WHERE session_id = ?
            """, (session_id,)).fetchone()

            if not session_row:
                return None

            # Get conversation messages
            message_rows = conn.execute("""
                SELECT role, content, timestamp
                FROM messages
                WHERE session_id = ?
                ORDER BY id ASC
            """, (session_id,)).fetchall()

            # Reconstruct session
            conversation = [
                ChatMessage(
                    role=row['role'],
                    content=row['content'],
                    timestamp=datetime.fromisoformat(row['timestamp'])
                ) for row in message_rows
            ]

            return InterviewSession(
                session_id=session_row['session_id'],
                question=Question(**json.loads(session_row['question_data'])),
                user_code=session_row['user_code'],
                conversation=conversation,
                start_time=datetime.fromisoformat(session_row['start_time']),
                scores=json.loads(session_row['scores'] or '{}'),
                feedback=json.loads(session_row['feedback'] or '[]')
            )

    def update_session_code(self, session_id: str, code: str, language: str = 'python') -> bool:
        """Update session code and create snapshot"""
        with sqlite3.connect(self.db_path) as conn:
            # Update session code
            cursor = conn.execute("""
                UPDATE sessions SET user_code = ? WHERE session_id = ?
            """, (code, session_id))

            if cursor.rowcount == 0:
                return False

            # Create code snapshot
            conn.execute("""
                INSERT INTO code_snapshots (session_id, code, language)
                VALUES (?, ?, ?)
            """, (session_id, code, language))

            conn.commit()
            return True

    def add_message(self, session_id: str, message: ChatMessage) -> bool:
        """Add message to conversation"""
        with sqlite3.connect(self.db_path) as conn:
            conn.execute("""
                INSERT INTO messages (session_id, role, content, timestamp)
                VALUES (?, ?, ?, ?)
            """, (
                session_id,
                message.role,
                message.content,
                message.timestamp.isoformat()
            ))
            conn.commit()
            return True

    def get_recent_messages(self, session_id: str, limit: int = 10) -> List[ChatMessage]:
        """Get recent messages for AI context (saves tokens)"""
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row

            rows = conn.execute("""
                SELECT role, content, timestamp
                FROM messages
                WHERE session_id = ?
                ORDER BY id DESC
                LIMIT ?
            """, (session_id, limit)).fetchall()

            # Reverse to get chronological order
            return [
                ChatMessage(
                    role=row['role'],
                    content=row['content'],
                    timestamp=datetime.fromisoformat(row['timestamp'])
                ) for row in reversed(rows)
            ]

    def get_code_evolution(self, session_id: str) -> List[Dict[str, Any]]:
        """Get code evolution history for analytics"""
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row

            rows = conn.execute("""
                SELECT code, language, timestamp
                FROM code_snapshots
                WHERE session_id = ?
                ORDER BY id ASC
            """, (session_id,)).fetchall()

            return [dict(row) for row in rows]

    def delete_session(self, session_id: str) -> bool:
        """Delete session and all related data"""
        with sqlite3.connect(self.db_path) as conn:
            # Delete messages
            conn.execute("DELETE FROM messages WHERE session_id = ?", (session_id,))
            # Delete code snapshots
            conn.execute("DELETE FROM code_snapshots WHERE session_id = ?", (session_id,))
            # Delete session
            cursor = conn.execute("DELETE FROM sessions WHERE session_id = ?", (session_id,))
            conn.commit()
            return cursor.rowcount > 0

    def get_user_sessions(self, limit: int = 10) -> List[Dict[str, Any]]:
        """Get recent sessions for user dashboard"""
        with sqlite3.connect(self.db_path) as conn:
            conn.row_factory = sqlite3.Row

            rows = conn.execute("""
                SELECT
                    s.session_id,
                    s.question_data,
                    s.start_time,
                    s.status,
                    COUNT(m.id) as message_count,
                    LENGTH(s.user_code) as code_length
                FROM sessions s
                LEFT JOIN messages m ON s.session_id = m.session_id
                GROUP BY s.session_id
                ORDER BY s.created_at DESC
                LIMIT ?
            """, (limit,)).fetchall()

            return [dict(row) for row in rows]