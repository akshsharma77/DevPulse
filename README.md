# DevPulse

**AI-Powered Developer Intelligence Platform**

DevPulse analyzes your GitHub activity and coding patterns, using AI to surface insights about your development habits, productivity trends, and growth over time.

---

## Tech Stack

![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![DRF](https://img.shields.io/badge/DRF-ff1709?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Gemini](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white)

---

## Features

- 🔐 JWT-based user authentication
- 📊 Developer activity analytics dashboard
- 🐙 GitHub data integration
- 🤖 AI-powered insights via Google Gemini
- 👤 Public developer profiles
- 📈 Visual charts and trend tracking

---

## Setup Instructions

### Backend (Django)

```bash
cd backend
python -m venv venv
venv\Scripts\activate      # Windows
source venv/bin/activate   # Mac
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend runs at `http://localhost:8000`

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`

---

## Folder Structure
```
devpulse/
├── backend/ # Django project settings
├── users/ # Authentication & user management
├── analytics/ # Developer analytics engine
├── github_data/ # GitHub API integration
├── ai_engine/ # Gemini AI insights
├── frontend/
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Route-level pages
│ ├── services/ # API layer (axios)
│ ├── context/ # React context providers
│ ├── hooks/ # Custom React hooks
│ └── utils/ # Helper functions
└── README.md
```

## Still in Progress
