# Megaplex — Vighnaharta Infinity Real Estate Website

A full-stack real estate website for **Vighnaharta Infinity**, built with React + Vite on the frontend and Node.js + Express + MongoDB on the backend. Includes a complete content management admin panel.

🌐 **Live Demo:** [megaplex-assignment.vercel.app](https://megaplex-assignment.vercel.app)  
🔧 **Backend API:** [megaplex-assignment.onrender.com](https://megaplex-assignment.onrender.com)

---

## Project Structure

```
megaplex/
├── frontend/                  # React + Vite frontend
│   ├── src/
│   │   ├── components/        # Navbar, Hero, AboutProject, Amenities, etc.
│   │   ├── styles/            # CSS files per component
│   │   ├── context/           # ContentContext (global DB state)
│   │   ├── admin/             # AdminLogin, AdminDashboard
│   │   └── App.jsx            # Routes: /, /admin, /admin/dashboard
│   └── vercel.json            # Vercel SPA routing config
├── backend/
│   ├── config/                # MongoDB connection
│   ├── models/                # Content mongoose model
│   ├── routes/                # /api/content REST routes
│   ├── seeds/                 # Seed script for initial data
│   └── server.js              # Express entry point
└── README.md
```

---

## Local Setup

### Prerequisites
- Node.js 18+
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repo
```bash
git clone https://github.com/vibhor0599bagga/megaplex-assignment-.git
cd megaplex-assignment-
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` folder:
```env
PORT=5000
NODE_ENV=development
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/megaplexDB?retryWrites=true&w=majority
```

Seed the database with initial content:
```bash
npm run seed
```

Start the backend server:
```bash
npm run dev
```
Backend runs on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend/` folder:
```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## Admin Panel

The site includes a full content management dashboard to edit all website sections without touching the code.

### Login
| Field | Value |
|---|---|
| URL | `/admin` |
| Email | `admin@gmail.com` |
| Password | `1234` |

### Dashboard Features
Once logged in at `/admin/dashboard`, you can edit:

| Section | Editable Fields |
|---|---|
| **Hero** | Headings, features, BHK pricing, location |
| **About Project** | Title, description paragraphs, button text |
| **Amenities** | Title, subtitle, amenity items (add/remove) |
| **About Developer** | Title, description, stats (number + label) |
| **Construction Updates** | Title, update cards (status, label, CTA) |
| **FAQ** | Title, Q&A pairs (add/remove) |

All changes are saved to MongoDB and reflected on the live site instantly.

---

## Features

### Frontend
- ⚡ React 18 + Vite 5
- 🗺️ React Router v6 (client-side routing)
- 🌐 Global content state via Context API
- 📱 Fully responsive design
- 🎨 Custom CSS per component (no UI library)
- 🔄 Default fallback content (site renders even if API is slow)

### Backend
- 🚀 Node.js + Express REST API
- 🍃 MongoDB Atlas + Mongoose
- 🔒 CORS configured for Vercel domains
- 📦 One document per section (`{ section, data }` schema)
- 🌱 Seed script for easy DB setup
- ♻️ Safe re-seeding with upsert

### Admin
- 🔐 Protected login (`/admin`)
- 📝 Edit all sections via forms
- ➕ Add/remove array items (FAQ, amenities, stats, updates)
- 💾 Saves to MongoDB via `PUT /api/content/:section`
- 🚪 Logout clears session

---

## Deployment

| Service | Platform |
|---|---|
| Frontend | [Vercel](https://vercel.com) — Root dir: `frontend` |
| Backend | [Render](https://render.com) — Root dir: `backend`, Start: `node server.js` |
| Database | MongoDB Atlas |

### Render Environment Variables
```
PORT=10000
NODE_ENV=production
MONGO_URI=<your atlas connection string>
```

### Vercel Environment Variables
```
VITE_API_URL=https://megaplex-assignment.onrender.com
```

---

## Scripts

### Backend
| Command | Description |
|---|---|
| `npm run dev` | Start with nodemon (development) |
| `npm start` | Start with node (production) |
| `npm run seed` | Populate MongoDB with default content |

### Frontend
| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
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
