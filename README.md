# Interview Coach 🎯

An AI-powered coding interview practice platform that helps you ace your technical interviews.

## Architecture

- **Frontend**: React + Vite + TypeScript
- **Backend**: FastAPI Python service
- **UI**: Custom components with Radix UI

## Features

### 🤖 AI Interviewer
- Interactive chat-based interviewing experience
- Real-time feedback on your coding solutions
- Contextual hints and guidance

### 💻 Coding Environment
- Built-in code editor with syntax highlighting
- Support for multiple programming languages
- Real-time code evaluation and scoring

### 📊 Assessment Tools
- Code quality evaluation
- Performance metrics tracking
- Detailed feedback and improvement suggestions

### 🔧 Technical Stack
- React 18 with TypeScript
- FastAPI for backend API
- OpenAI GPT-4o-mini for AI responses
- Tailwind CSS for styling
- Radix UI components

## Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- Docker & Docker Compose
- OpenAI API Key

### Setup

1. **Clone and setup environment:**
```bash
git clone <your-repo>
cd interview-coach
cp .env.example .env  # Add your OPENAI_API_KEY
```

2. **Install dependencies:**
```bash
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd ../
npm install
```

3. **Scrape questions (optional):**
```bash
python scripts/scrape_leetcode.py
```

4. **Run with Docker:**
```bash
docker-compose up --build
```

Or run separately:
```bash
# Backend
cd backend && uvicorn app.main:app --reload

# Frontend
npm run dev
```

### Usage

1. Open http://localhost:3000 in your browser
2. Start a new interview session
3. Chat with the AI interviewer about the coding problem
4. Write your solution in the code editor
5. Submit for real-time feedback and evaluation

## API Endpoints

- `GET /api/questions/random` - Get random question
- `POST /api/sessions/start` - Start interview session
- `POST /api/sessions/{id}/submit-code` - Submit code for evaluation
- `POST /api/chat/{session_id}/message` - Chat with AI interviewer

## Architecture

```
interview-coach/
├── backend/           # FastAPI backend
│   ├── app/
│   │   ├── api/       # API endpoints
│   │   ├── services/  # Business logic
│   │   └── models.py  # Data models
│   └── tests/         # Backend tests
├── src/               # React frontend
├── scripts/           # Utility scripts
└── docker-compose.yml
```

## Development

### Backend Tests
```bash
cd backend && pytest
```

### Frontend Development
```bash
npm run dev
```

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit pull request

## License

MIT License - see LICENSE file for details.