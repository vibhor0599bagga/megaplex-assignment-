# Megaplex - Full Stack Application

A full-stack boilerplate project with React frontend and Node.js Express backend.

## Project Structure

```
megaplex/
├── frontend/          # React + Vite frontend
├── backend/           # Node.js Express backend
└── README.md
```

## Getting Started

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

## Features

### Backend
- Express.js server
- CORS enabled
- RESTful API structure
- Environment variable support
- Organized folder structure (routes, controllers, middleware)

### Frontend
- React 18
- Vite for fast development
- Modern JavaScript/JSX
- Hot Module Replacement (HMR)

## Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

### Backend
- Node.js
- Express.js
- CORS
- dotenv

### Frontend
- React
- Vite
- JavaScript/JSX

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
NODE_ENV=development
```

## License

MIT
