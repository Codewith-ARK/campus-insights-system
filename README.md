
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- # [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Campus Insight System

## Overview

The **Campus Insight System** is a web-based application designed to provide students, faculty, and administrators with actionable insights into campus activities, events, and resources. This project is integrated with the existing university website to ensure seamless access and user experience.

## Features

- **Event Management:** View, create, and manage campus events.
- **Announcements:** Stay updated with important campus announcements.
- **Resource Tracking:** Access and manage campus facilities and resources.
- **Insights Dashboard:** Analyze campus data for decision-making.
- **User Roles:** Separate dashboards for students, faculty, and administrators.

## Tech Stack

- **Frontend:** React (with Vite for development and build).
- **Backend:** Django (with Django REST Framework for APIs).
- **Database:** PostgreSQL (or your chosen database system).
- **Styling:** TailwindCSS or Bootstrap (optional).
- **Deployment:** To be hosted on cloud services (e.g., Netlify for frontend, Heroku for backend).

## Installation and Setup

### Prerequisites

- Node.js and npm installed.
- Python (3.8+) installed.
- PostgreSQL database (or an alternative setup).

### Backend (Django)

1. Clone the repository and navigate to the `backend/` folder:
   ```bash
   cd backend
   ```
2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```
3. Set up environment variables in a `.env` file:
   ```plaintext
   SECRET_KEY=your-secret-key
   DEBUG=True
   DATABASE_URL=postgres://username:password@localhost:5432/your_database
   ```
4. Apply migrations and start the server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (React)

1. Navigate to the `frontend/` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file for the API base URL:
   ```plaintext
   VITE_API_URL=http://127.0.0.1:8000/api
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Integration with University Website

- The system will be integrated into the university website by embedding the React frontend or linking to it directly via the university domain.

## Deployment

- **Frontend:** Deployed on Netlify or Vercel.
- **Backend:** Deployed on Heroku, AWS, or Render.
- Use HTTPS for secure communication between frontend and backend.

## Contribution

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

For queries or feedback, please contact:

- **Name:** [Your Name]
- **Email:** [Your Email]
- **University:** [Your University Name]

