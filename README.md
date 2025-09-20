# Coffee Cafe - Full Stack Application

A modern, full-stack coffee shop web application built with React, Node.js, Express, and MongoDB Atlas.

## 🚀 Features

### Frontend (React + Vite + Tailwind CSS)
- **Modern UI/UX** with responsive design
- **User Authentication** powered by Clerk
- **Beautiful Components**: Navbar, Banner, Services, Testimonials, Footer
- **Custom Fonts** and smooth animations
- **Mobile-first** responsive design

### Backend (Node.js + Express + MongoDB Atlas)
- **RESTful API** with full CRUD operations
- **Cloud Database** integration with MongoDB Atlas
- **Coffee Management System**
- **Professional error handling**
- **Environment-based configuration**

### Authentication
- **Clerk Integration** for seamless user management
- Sign In/Sign Up functionality
- User profile management
- Secure authentication flow

## 🛠️ Tech Stack

**Frontend:**
- React 19
- Vite
- Tailwind CSS
- Clerk (Authentication)
- AOS (Animations)
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM
- CORS

## 📁 Project Structure

```
coffee-cafe/
├── my-app/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── assets/         # Images and static files
│   │   └── services/       # API service functions
│   ├── public/
│   └── package.json
├── backend/                # Backend Node.js application
│   ├── server.js           # Main server file
│   ├── package.json
│   └── .env               # Environment variables
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account
- Clerk account

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with your Clerk credentials:
```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your MongoDB Atlas connection string:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
```

4. Start the server:
```bash
node server.js
```

The backend will run on `http://localhost:8004`

## 📚 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/coffee` | Get all coffee items |
| POST | `/api/coffee` | Create a new coffee item |
| PATCH | `/api/coffee/:id` | Update a coffee item |
| DELETE | `/api/coffee/:id` | Delete a coffee item |

### Example API Usage

**Get all coffees:**
```bash
GET http://localhost:8004/api/coffee
```

**Create a new coffee:**
```bash
POST http://localhost:8004/api/coffee
Content-Type: application/json

{
  "name": "Espresso",
  "price": 3.99,
  "description": "Strong and bold coffee",
  "category": "Hot Coffee"
}
```

## 🎨 Features Showcase

### 🔐 Authentication
- Seamless sign in/sign up process
- User profile management
- Protected routes

### ☕ Coffee Management
- Display coffee menu
- Add new coffee items
- Update existing items
- Delete coffee items

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Smooth animations and transitions

## 🌐 Deployment

### Frontend (Vercel)
The frontend is configured for Vercel deployment with `vercel.json`.

### Backend (Railway/Heroku)
Configure environment variables in your deployment platform.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer

**SATWIK**
- GitHub: [@SATWIKKKKK](https://github.com/SATWIKKKKK)

---

**Built with ❤️ and ☕**