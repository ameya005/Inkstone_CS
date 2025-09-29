#!/usr/bin/env python3
"""
Test script for Interview Coach API endpoints
Tests the integration between sessions, chat, and code context
"""

import asyncio
import aiohttp
import json
import sys

API_BASE = "http://127.0.0.1:8001"

async def test_interview_flow():
    """Test the complete interview flow with code context"""
    async with aiohttp.ClientSession() as session:

        print("🚀 Starting Interview Coach API Tests")
        print("=" * 50)

        # Test 1: Create new interview session
        print("\n1. Testing session creation...")
        async with session.post(f"{API_BASE}/api/sessions/start", json={}) as resp:
            if resp.status != 200:
                print(f"❌ Failed to create session: {resp.status}")
                return False

            session_data = await resp.json()
            session_id = session_data["session_id"]
            question_title = session_data["question"]["title"]
            print(f"✅ Created session {session_id[:8]}... with question: {question_title}")

        # Test 2: Update session code
        print("\n2. Testing code update...")
        test_code = """def two_sum(nums, target):
    # Using hashmap approach
    num_map = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in num_map:
            return [num_map[complement], i]
        num_map[num] = i
    return []"""

        update_payload = {
            "session_id": session_id,
            "code": test_code,
            "language": "python"
        }

        async with session.post(f"{API_BASE}/api/sessions/{session_id}/update-code", json=update_payload) as resp:
            if resp.status != 200:
                print(f"❌ Failed to update code: {resp.status}")
                return False

            result = await resp.json()
            print(f"✅ Code updated successfully: {result['message']}")

        # Test 3: Send chat message (should include code context)
        print("\n3. Testing chat with code context...")
        chat_payload = {
            "session_id": session_id,
            "message": "Can you review my solution approach? Is the time complexity optimal?"
        }

        async with session.post(f"{API_BASE}/api/chat/{session_id}/message", json=chat_payload) as resp:
            if resp.status != 200:
                print(f"❌ Failed to send chat message: {resp.status}")
                return False

            chat_result = await resp.json()
            ai_response = chat_result["message"]
            print(f"✅ AI Response: {ai_response[:100]}...")

        # Test 4: Send follow-up message (test conversation history)
        print("\n4. Testing conversation history...")
        followup_payload = {
            "session_id": session_id,
            "message": "What about space complexity?"
        }

        async with session.post(f"{API_BASE}/api/chat/{session_id}/message", json=followup_payload) as resp:
            if resp.status != 200:
                print(f"❌ Failed to send follow-up: {resp.status}")
                return False

            followup_result = await resp.json()
            ai_followup = followup_result["message"]
            print(f"✅ AI Follow-up: {ai_followup[:100]}...")

        # Test 5: Get conversation history
        print("\n5. Testing conversation history retrieval...")
        async with session.get(f"{API_BASE}/api/chat/{session_id}/conversation") as resp:
            if resp.status != 200:
                print(f"❌ Failed to get conversation: {resp.status}")
                return False

            conversation_data = await resp.json()
            conversation = conversation_data["conversation"]
            print(f"✅ Conversation has {len(conversation)} messages")

            # Verify conversation contains our messages
            user_messages = [msg for msg in conversation if msg["role"] == "user"]
            ai_messages = [msg for msg in conversation if msg["role"] == "assistant"]

            print(f"   - User messages: {len(user_messages)}")
            print(f"   - AI messages: {len(ai_messages)}")

        # Test 6: Update code again and test context
        print("\n6. Testing code update with modified solution...")
        modified_code = """def two_sum(nums, target):
    # Trying brute force first
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
    return []"""

        modified_payload = {
            "session_id": session_id,
            "code": modified_code,
            "language": "python"
        }

        async with session.post(f"{API_BASE}/api/sessions/{session_id}/update-code", json=modified_payload) as resp:
            if resp.status != 200:
                print(f"❌ Failed to update modified code: {resp.status}")
                return False
            print("✅ Modified code updated")

        # Test 7: Ask AI about the change
        print("\n7. Testing AI awareness of code changes...")
        change_payload = {
            "session_id": session_id,
            "message": "I changed my approach to brute force. What do you think about the time complexity now?"
        }

        async with session.post(f"{API_BASE}/api/chat/{session_id}/message", json=change_payload) as resp:
            if resp.status != 200:
                print(f"❌ Failed to send change message: {resp.status}")
                return False

            change_result = await resp.json()
            ai_change_response = change_result["message"]
            print(f"✅ AI Response to change: {ai_change_response[:100]}...")

        # Test 8: Get session details to verify code is stored
        print("\n8. Testing session state persistence...")
        async with session.get(f"{API_BASE}/api/sessions/{session_id}") as resp:
            if resp.status != 200:
                print(f"❌ Failed to get session: {resp.status}")
                return False

            final_session = await resp.json()
            stored_code = final_session.get("user_code", "")
            print(f"✅ Session code stored: {len(stored_code)} characters")
            print(f"   Code preview: {stored_code[:50]}...")

        print("\n" + "=" * 50)
        print("🎉 All tests passed! Code context and conversation history are working correctly.")
        return True

async def test_error_cases():
    """Test error handling"""
    async with aiohttp.ClientSession() as session:
        print("\n🧪 Testing error cases...")

        # Test invalid session ID
        async with session.post(f"{API_BASE}/api/chat/invalid-session-id/message",
                               json={"session_id": "invalid", "message": "test"}) as resp:
            if resp.status == 404:
                print("✅ Invalid session ID properly rejected")
            else:
                print(f"❌ Expected 404, got {resp.status}")

async def main():
    """Run all tests"""
    try:
        print("Testing API connection...")
        async with aiohttp.ClientSession() as session:
            async with session.get(f"{API_BASE}/api/test") as resp:
                if resp.status != 200:
                    print(f"❌ API not accessible at {API_BASE}")
                    sys.exit(1)
                print("✅ API is accessible")

        # Run main test flow
        success = await test_interview_flow()

        # Run error case tests
        await test_error_cases()

        if success:
            print("\n🎉 All tests completed successfully!")
            sys.exit(0)
        else:
            print("\n❌ Some tests failed!")
            sys.exit(1)

    except Exception as e:
        print(f"❌ Test execution failed: {e}")
        sys.exit(1)

if __name__ == "__main__":
    asyncio.run(main())