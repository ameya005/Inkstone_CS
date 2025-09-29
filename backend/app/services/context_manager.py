"""
Intelligent context management to prevent context bloat
while maintaining conversation coherence
"""

from typing import List, Dict, Any
from app.models import ChatMessage
from app.services.session_store import SessionStore
import re

class ContextManager:
    def __init__(self, session_store: SessionStore):
        self.session_store = session_store
        self.max_context_tokens = 1000  # Roughly 750 words

    def get_optimized_context(self, session_id: str) -> Dict[str, Any]:
        """Get optimized conversation context that stays within token limits"""

        # Get all messages
        all_messages = self.session_store.get_recent_messages(session_id, limit=50)

        if len(all_messages) <= 4:
            # Short conversation, return as is
            return {
                "context_type": "full",
                "messages": all_messages,
                "summary": None
            }

        # For longer conversations, use intelligent summarization
        return self._create_smart_context(all_messages)

    def _create_smart_context(self, messages: List[ChatMessage]) -> Dict[str, Any]:
        """Create smart context that preserves important information"""

        # Analyze conversation for key topics
        topics = self._extract_topics(messages)

        # Always keep the last 2 exchanges (4 messages)
        recent_messages = messages[-4:] if len(messages) >= 4 else messages

        # Create summary of older conversation focusing on key topics
        older_messages = messages[:-4] if len(messages) > 4 else []
        summary = self._create_topic_summary(older_messages, topics)

        return {
            "context_type": "summarized",
            "messages": recent_messages,
            "summary": summary,
            "topics": topics
        }

    def _extract_topics(self, messages: List[ChatMessage]) -> Dict[str, Any]:
        """Extract key topics and insights from conversation"""
        topics = {
            "current_approach": None,
            "time_complexity": None,
            "space_complexity": None,
            "issues_discussed": [],
            "user_understanding": "beginner",  # Could be inferred
            "code_evolution": []
        }

        full_text = " ".join([msg.content.lower() for msg in messages])

        # Extract time complexity mentions
        time_complexity_patterns = [
            r"o\(n\^?2\)",  # O(n^2) or O(n2)
            r"o\(n\)",      # O(n)
            r"o\(1\)",      # O(1)
            r"o\(log\s?n\)" # O(log n)
        ]

        for pattern in time_complexity_patterns:
            if re.search(pattern, full_text):
                topics["time_complexity"] = re.search(pattern, full_text).group()
                break

        # Extract approach mentions
        if "hashmap" in full_text or "hash" in full_text:
            topics["current_approach"] = "hashmap"
        elif "brute force" in full_text:
            topics["current_approach"] = "brute_force"
        elif "two pointer" in full_text:
            topics["current_approach"] = "two_pointer"

        # Extract issues
        issue_keywords = ["stuck", "error", "wrong", "issue", "problem", "bug"]
        for keyword in issue_keywords:
            if keyword in full_text:
                topics["issues_discussed"].append(keyword)

        return topics

    def _create_topic_summary(self, older_messages: List[ChatMessage], topics: Dict[str, Any]) -> str:
        """Create concise summary focusing on key points"""
        if not older_messages:
            return ""

        summary_parts = []

        # Approach summary
        if topics["current_approach"]:
            summary_parts.append(f"User working on {topics['current_approach']} approach")

        # Complexity discussion
        if topics["time_complexity"]:
            summary_parts.append(f"Discussed time complexity: {topics['time_complexity']}")

        # Issues
        if topics["issues_discussed"]:
            summary_parts.append(f"Areas of focus: {', '.join(topics['issues_discussed'])}")

        # Fallback to generic summary
        if not summary_parts:
            summary_parts.append(f"Previous discussion covered problem-solving approach and implementation details")

        return "Context: " + ". ".join(summary_parts) + "."

    def format_for_ai(self, context_data: Dict[str, Any], current_code: str) -> List[Dict[str, str]]:
        """Format context for AI consumption"""
        messages = []

        # Add summary as system message if exists
        if context_data.get("summary"):
            messages.append({
                "role": "system",
                "content": context_data["summary"]
            })

        # Add recent messages
        for msg in context_data["messages"]:
            messages.append({
                "role": msg.role,
                "content": msg.content
            })

        # Add current code context if it's been updated recently
        if current_code and len(current_code.strip()) > 20:
            messages.append({
                "role": "system",
                "content": f"Current code:\n```python\n{current_code}\n```"
            })

        return messages

    def estimate_tokens(self, text: str) -> int:
        """Rough token estimation (1 token ≈ 0.75 words)"""
        word_count = len(text.split())
        return int(word_count / 0.75)

    def get_conversation_stats(self, session_id: str) -> Dict[str, Any]:
        """Get conversation statistics for monitoring"""
        messages = self.session_store.get_recent_messages(session_id, limit=100)

        total_tokens = sum(self.estimate_tokens(msg.content) for msg in messages)

        return {
            "total_messages": len(messages),
            "estimated_tokens": total_tokens,
            "avg_user_msg_length": sum(len(msg.content) for msg in messages if msg.role == "user") / max(1, len([m for m in messages if m.role == "user"])),
            "avg_ai_msg_length": sum(len(msg.content) for msg in messages if msg.role == "assistant") / max(1, len([m for m in messages if m.role == "assistant"]))
        }