import os
from typing import List, Dict, Any
from openai import AsyncOpenAI
from app.models import Question, ChatMessage
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

class OpenAIService:
    def __init__(self):
        api_key = os.getenv("OPENAI_API_KEY")
        if not api_key:
            raise ValueError("OPENAI_API_KEY environment variable is required")

        self.client = AsyncOpenAI(api_key=api_key)
        self.model = "gpt-4o-mini"  # Cost-effective model

    async def get_interviewer_response(
        self,
        question: Question,
        context_messages: List[Dict[str, str]],
        user_code: str = ""
    ) -> str:
        """Get AI interviewer response based on question and conversation context"""

        # Build system prompt with reinforced problem context
        system_prompt = f"""You are a senior software engineer conducting a technical interview. Focus on evaluating the candidate's OVERALL CODING CAPABILITY, not minor details.

=== PROBLEM CONTEXT (NEVER LOSE THIS) ===
Problem: {question.title}
Description: {question.description}
Difficulty: {question.difficulty}
Examples: {question.examples}
Constraints: {question.constraints}

=== EVALUATION PHILOSOPHY ===
PRIMARY FOCUS: Can they solve coding problems? Do they think logically?

IGNORE: Minor syntax errors, variable naming, irrelevant test cases
FOCUS ON: Algorithm choice, logical flow, complexity understanding, problem-solving approach

=== INTERVIEW PHASES ===
1. UNDERSTANDING (1-2 exchanges): Do they grasp the problem?
2. APPROACH (2-3 exchanges): Can they design a solution?
3. IMPLEMENTATION (2-3 exchanges): Can they code it reasonably?
4. VARIANTS (1-2 exchanges): After working solution, ALWAYS ask conceptual variants (NO CODE NEEDED)

=== BEHAVIOR RULES ===
- DON'T give hints - ask: "What do you think might be wrong?"
- FORGIVE syntax errors - focus on algorithm logic
- SKIP irrelevant edge cases unless they're core to the problem
- After working solution: ALWAYS ask 1-2 conceptual variants to test thinking
- DON'T terminate immediately after working solution - ASK VARIANTS FIRST
- Focus on BIG PICTURE: Can they solve problems? Do they think logically?
- Be patient with variant questions - this is crucial evaluation data

=== TERMINATION STRATEGY (6-10 exchanges maximum) ===
PHASE 1-3 (exchanges 1-6): Problem understanding, approach, implementation
PHASE 4 (exchanges 7-8): MANDATORY variant questions after working solution
PHASE 5 (exchanges 9-10): End interview

End interview with <end_interview> ONLY when:
- Working solution + asked variant questions (SUCCESS)
- 4+ failed attempts to guide them (STRUGGLING)
- Unprofessional behavior (REJECT)
- After asking variants and getting responses (COMPLETE)

EXAMPLES:
✓ "Great! Let me ask one variant: How would this change if the array was sorted?" (exchange 7, NO <end_interview> yet)
✓ "Excellent thinking! One more: What if we had duplicate values?" (exchange 8, NO <end_interview> yet)
✓ "Perfect! You've shown strong problem-solving skills. <end_interview>" (exchange 9, NOW end)
✓ "I can see you understand the fundamentals well. <end_interview>" (exchange 10, NOW end)

=== CURRENT STATE ===
Candidate's code:
```python
{user_code or "# No code written yet"}
```

Be decisive. Focus on big picture. End interviews quickly once you have enough signal."""

        # Build conversation history with optimized context
        messages = [{"role": "system", "content": system_prompt}]

        # Add pre-formatted context messages (already optimized for tokens)
        messages.extend(context_messages)

        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                max_tokens=400,  # Allow detailed feedback for better interview experience
                temperature=0.7
            )

            return response.choices[0].message.content

        except Exception as e:
            print(f"OpenAI API error: {e}")
            return "I'm having trouble connecting right now. Please try again in a moment."

    async def evaluate_code(
        self,
        question: Question,
        code: str,
        language: str = "python"
    ) -> dict:
        """Evaluate submitted code and provide feedback"""

        system_prompt = f"""You are evaluating a coding solution for: {question.title}

Question: {question.description}

Evaluate the following {language} code on these criteria (score 1-10):
1. Correctness - Does it solve the problem?
2. Code Quality - Is it clean and readable?
3. Efficiency - Time and space complexity

Do not worry too much about syntax errors unless they are critical.

If the solution is incomplete, evaluate if approach used -- datastructures, algorithms are on the right track.

Provide scores and brief feedback. Keep response under 100 words.

Code to evaluate:
```{language}
{code}
```"""

        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "system", "content": system_prompt}],
                max_tokens=200,
                temperature=0.3
            )

            # Parse response (simplified - could be more sophisticated)
            content = response.choices[0].message.content

            return {
                "feedback": content,
                "scores": {
                    "correctness": 7.5,  # Could parse from AI response
                    "code_quality": 8.0,
                    "efficiency": 6.5
                }
            }

        except Exception as e:
            print(f"OpenAI API error: {e}")
            return {
                "feedback": "Unable to evaluate code at this time.",
                "scores": {"correctness": 0, "code_quality": 0, "efficiency": 0}
            }

    async def evaluate_interview(
        self,
        question: Question,
        conversation: List[ChatMessage],
        final_code: str = ""
    ) -> Dict[str, Any]:
        """Comprehensive interview evaluation by AI assessor"""

        # Build conversation summary
        conversation_text = "\n".join([
            f"{msg.role.upper()}: {msg.content}"
            for msg in conversation
        ])

        evaluation_prompt = f"""You are an expert technical interviewer evaluating a completed coding interview.

PROBLEM: {question.title}
DIFFICULTY: {question.difficulty}
DESCRIPTION: {question.description}

CONVERSATION TRANSCRIPT:
{conversation_text}

FINAL CODE:
```python
{final_code or "No final code submitted"}
```

EVALUATION RUBRICS (Score 1-10 for each):
Focus on OVERALL CODING CAPABILITY, not nitpicky details.

1. PROBLEM UNDERSTANDING (1-10)
   - Did they grasp the core problem quickly?
   - Can they identify what needs to be solved?

2. ALGORITHMIC THINKING (1-10)
   - Logical approach to solution design?
   - Can they break down complex problems?
   - Reasonable algorithm choices?

3. CODING ABILITY (1-10)
   - Can they translate ideas into working code?
   - IGNORE minor syntax errors, FOCUS on logic flow
   - Do they write code that generally works?

4. TECHNICAL DEPTH (1-10)
   - Understands time/space complexity concepts?
   - Makes reasonable trade-off decisions?
   - Knows when to use different data structures?

5. PROBLEM-SOLVING COMMUNICATION (1-10)
   - Can they explain their thinking process?
   - Do they ask good clarifying questions?
   - Can they discuss variants and edge cases?

6. ADAPTABILITY (1-10)
   - Can they debug and self-correct logical errors?
   - How do they handle interviewer guidance?
   - Can they think through problem variants?

PROVIDE YOUR EVALUATION IN THIS EXACT FORMAT:
SCORES:
Problem Understanding: X/10
Approach & Methodology: X/10
Code Quality: X/10
Technical Knowledge: X/10
Communication: X/10
Debugging & Self-Correction: X/10

OVERALL: X/10

STRENGTHS:
- [List 2-3 key strengths]

AREAS FOR IMPROVEMENT:
- [List 2-3 specific areas to improve]

RECOMMENDATION:
[HIRE/NO HIRE/BORDERLINE] - Brief justification

DETAILED FEEDBACK:
[2-3 paragraphs of specific, actionable feedback]"""

        try:
            response = await self.client.chat.completions.create(
                model=self.model,
                messages=[{"role": "system", "content": evaluation_prompt}],
                max_tokens=600,  # Allow detailed feedback
                temperature=0.3  # More consistent evaluation
            )

            evaluation_text = response.choices[0].message.content
            return self._parse_evaluation(evaluation_text)

        except Exception as e:
            print(f"OpenAI API error during evaluation: {e}")
            return {
                "scores": {
                    "problem_understanding": 5,
                    "approach": 5,
                    "code_quality": 5,
                    "technical_knowledge": 5,
                    "communication": 5,
                    "debugging": 5,
                    "overall": 5
                },
                "recommendation": "BORDERLINE",
                "strengths": ["Unable to evaluate due to technical error"],
                "improvements": ["Please retry the evaluation"],
                "feedback": "Evaluation temporarily unavailable due to technical issues."
            }

    def _parse_evaluation(self, evaluation_text: str) -> Dict[str, Any]:
        """Parse the structured evaluation response"""
        import re

        # Extract scores using regex
        scores = {}
        score_patterns = [
            (r"Problem Understanding:\s*(\d+)", "problem_understanding"),
            (r"Approach & Methodology:\s*(\d+)", "approach"),
            (r"Code Quality:\s*(\d+)", "code_quality"),
            (r"Technical Knowledge:\s*(\d+)", "technical_knowledge"),
            (r"Communication:\s*(\d+)", "communication"),
            (r"Debugging & Self-Correction:\s*(\d+)", "debugging"),
            (r"OVERALL:\s*(\d+)", "overall")
        ]

        for pattern, key in score_patterns:
            match = re.search(pattern, evaluation_text, re.IGNORECASE)
            scores[key] = int(match.group(1)) if match else 5

        # Extract recommendation
        rec_match = re.search(r"RECOMMENDATION:\s*\n?\[?(HIRE|NO HIRE|BORDERLINE)\]?", evaluation_text, re.IGNORECASE)
        recommendation = rec_match.group(1) if rec_match else "BORDERLINE"

        # Extract strengths and improvements (simplified)
        strengths_match = re.search(r"STRENGTHS:\s*\n(.*?)(?=AREAS FOR IMPROVEMENT:|RECOMMENDATION:|$)", evaluation_text, re.DOTALL | re.IGNORECASE)
        improvements_match = re.search(r"AREAS FOR IMPROVEMENT:\s*\n(.*?)(?=RECOMMENDATION:|DETAILED FEEDBACK:|$)", evaluation_text, re.DOTALL | re.IGNORECASE)
        feedback_match = re.search(r"DETAILED FEEDBACK:\s*\n(.*?)$", evaluation_text, re.DOTALL | re.IGNORECASE)

        return {
            "scores": scores,
            "recommendation": recommendation,
            "strengths": strengths_match.group(1).strip().split('\n') if strengths_match else ["Assessment pending"],
            "improvements": improvements_match.group(1).strip().split('\n') if improvements_match else ["Assessment pending"],
            "feedback": feedback_match.group(1).strip() if feedback_match else evaluation_text,
            "raw_evaluation": evaluation_text
        }