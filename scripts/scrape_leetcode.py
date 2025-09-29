#!/usr/bin/env python3
"""
LeetCode Question Scraper

This script scrapes LeetCode questions and saves them to the backend data folder.
Note: Respect LeetCode's rate limits and terms of service.
"""

import requests
import json
import time
import random
from pathlib import Path
from typing import List, Dict, Any
import sys
import os

# Add the backend to Python path
sys.path.append(str(Path(__file__).parent.parent / "backend"))

from app.models import Question, QuestionExample, DifficultyLevel, QuestionCategory

class LeetCodeScraper:
    def __init__(self):
        self.base_url = "https://leetcode.com"
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.9',
            'Referer': 'https://leetcode.com/problemset/all/',
        })

    def scrape_problem_list(self, limit: int = 50) -> List[Dict[str, Any]]:
        """
        Scrape problem list from LeetCode API
        Note: This uses LeetCode's GraphQL API which might change
        """
        url = "https://leetcode.com/graphql"

        # GraphQL query to get problem list
        query = """
        query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
            problemsetQuestionList: questionList(
                categorySlug: $categorySlug
                limit: $limit
                skip: $skip
                filters: $filters
            ) {
                total: totalNum
                questions: data {
                    acRate
                    difficulty
                    freqBar
                    frontendQuestionId: questionFrontendId
                    isFavor
                    paidOnly: isPaidOnly
                    status
                    title
                    titleSlug
                    topicTags {
                        name
                        id
                        slug
                    }
                    hasSolution
                    hasVideoSolution
                }
            }
        }
        """

        payload = {
            "query": query,
            "variables": {
                "categorySlug": "",
                "limit": limit,
                "skip": 0,
                "filters": {}
            }
        }

        try:
            response = self.session.post(url, json=payload)
            response.raise_for_status()
            return response.json()["data"]["problemsetQuestionList"]["questions"]
        except Exception as e:
            print(f"Error fetching problem list: {e}")
            return []

    def scrape_problem_details(self, title_slug: str) -> Dict[str, Any]:
        """Scrape individual problem details"""
        url = "https://leetcode.com/graphql"

        query = """
        query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                title
                titleSlug
                content
                difficulty
                likes
                dislikes
                similarQuestions
                topicTags {
                    name
                    slug
                }
                codeSnippets {
                    lang
                    langSlug
                    code
                }
                sampleTestCase
                exampleTestcases
            }
        }
        """

        payload = {
            "query": query,
            "variables": {"titleSlug": title_slug}
        }

        try:
            response = self.session.post(url, json=payload)
            response.raise_for_status()
            return response.json()["data"]["question"]
        except Exception as e:
            print(f"Error fetching problem details for {title_slug}: {e}")
            return {}

    def map_difficulty(self, leetcode_difficulty: str) -> DifficultyLevel:
        """Map LeetCode difficulty to our enum"""
        mapping = {
            "Easy": DifficultyLevel.EASY,
            "Medium": DifficultyLevel.MEDIUM,
            "Hard": DifficultyLevel.HARD
        }
        return mapping.get(leetcode_difficulty, DifficultyLevel.MEDIUM)

    def map_category(self, topic_tags: List[Dict]) -> QuestionCategory:
        """Map LeetCode topic tags to our category enum"""
        if not topic_tags:
            return QuestionCategory.ARRAY

        # Priority mapping - first match wins
        tag_mapping = {
            "Array": QuestionCategory.ARRAY,
            "String": QuestionCategory.STRING,
            "Linked List": QuestionCategory.LINKED_LIST,
            "Tree": QuestionCategory.TREE,
            "Graph": QuestionCategory.GRAPH,
            "Dynamic Programming": QuestionCategory.DYNAMIC_PROGRAMMING,
            "Greedy": QuestionCategory.GREEDY,
            "Backtracking": QuestionCategory.BACKTRACKING,
            "Binary Search": QuestionCategory.BINARY_SEARCH,
            "Sorting": QuestionCategory.SORTING,
            "Hash Table": QuestionCategory.HASH_TABLE,
            "Stack": QuestionCategory.STACK,
            "Queue": QuestionCategory.QUEUE,
        }

        for tag in topic_tags:
            tag_name = tag.get("name", "")
            if tag_name in tag_mapping:
                return tag_mapping[tag_name]

        return QuestionCategory.ARRAY  # Default

    def parse_examples_from_content(self, content: str) -> List[QuestionExample]:
        """Parse examples from HTML content (simplified)"""
        examples = []

        # This is a simplified parser - could be more sophisticated
        # For now, return mock examples
        examples.append(QuestionExample(
            input="nums = [2,7,11,15], target = 9",
            output="[0,1]",
            explanation="Because nums[0] + nums[1] == 9, we return [0, 1]."
        ))

        return examples

    def create_question_from_data(self, problem_data: Dict, details: Dict) -> Question:
        """Convert scraped data to Question model"""
        return Question(
            id=str(problem_data["frontendQuestionId"]),
            title=problem_data["title"],
            difficulty=self.map_difficulty(problem_data["difficulty"]),
            category=self.map_category(problem_data.get("topicTags", [])),
            description=details.get("content", "").replace("<p>", "").replace("</p>", "\n"),
            examples=self.parse_examples_from_content(details.get("content", "")),
            constraints=["1 <= nums.length <= 10^4", "Constraints extracted from problem"],
            hints=[],
            companies=[]
        )

    def scrape_questions(self, count: int = 20) -> List[Question]:
        """Scrape a specified number of questions"""
        print(f"Scraping {count} LeetCode problems...")

        # Get problem list
        problems = self.scrape_problem_list(limit=count)
        questions = []

        for i, problem in enumerate(problems[:count]):
            if problem.get("paidOnly", False):
                print(f"Skipping paid problem: {problem['title']}")
                continue

            print(f"Scraping {i+1}/{count}: {problem['title']}")

            # Get detailed information
            details = self.scrape_problem_details(problem["titleSlug"])
            if not details:
                continue

            # Create question object
            question = self.create_question_from_data(problem, details)
            questions.append(question)

            # Be respectful - don't hammer the API
            time.sleep(random.uniform(1, 3))

        return questions

def main():
    """Main function to run the scraper"""
    scraper = LeetCodeScraper()

    # Scrape questions
    questions = scraper.scrape_questions(count=30)

    if not questions:
        print("No questions scraped. Exiting.")
        return

    # Save to backend data folder
    backend_dir = Path(__file__).parent.parent / "backend"
    data_dir = backend_dir / "app" / "data"
    data_dir.mkdir(parents=True, exist_ok=True)

    questions_file = data_dir / "questions.json"

    # Convert to JSON
    questions_data = [q.model_dump() for q in questions]

    with open(questions_file, 'w') as f:
        json.dump(questions_data, f, indent=2, default=str)

    print(f"Saved {len(questions)} questions to {questions_file}")

if __name__ == "__main__":
    main()