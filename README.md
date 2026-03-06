<div align="center">

<br/>

```
 ██████╗██╗  ██╗ █████╗ ████████╗ █████╗ ██████╗ ██████╗ 
██╔════╝██║  ██║██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗██╔══██╗
██║     ███████║███████║   ██║   ███████║██████╔╝██████╔╝
██║     ██╔══██║██╔══██║   ██║   ██╔══██║██╔═══╝ ██╔═══╝ 
╚██████╗██║  ██║██║  ██║   ██║   ██║  ██║██║     ██║     
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝     ╚═╝     
```

### Real-Time Full Stack Chat Application

*Connect. Communicate. Instantly.*

<br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)](LICENSE)

<br/>

[🚀 Live Demo](#) · [📖 Docs](#api-endpoints) · [🐛 Report Bug](https://github.com/Riyaban583/ChatApp/issues) · [✨ Request Feature](https://github.com/Riyaban583/ChatApp/issues)

<br/>

---

</div>

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Socket Events](#-socket-events)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Deployment](#-deployment)
- [Author](#-author)

---

## 🌟 Overview

**ChatApp** is a production-ready, full-stack real-time chat application that enables seamless instant messaging between users. Built on a modern JavaScript ecosystem, it demonstrates best practices in real-time communication, secure authentication, REST API design, and scalable frontend architecture.

Whether you're exploring WebSocket-based communication or building on top of this as a foundation, ChatApp covers the fundamentals with clean, readable code.

> 💡 **Key highlight:** Every message is delivered instantly via **Socket.io** — no polling, no delays.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication & Security
- User registration & login
- **JWT-based** session management
- Protected routes on both client & server
- Passwords hashed with **bcrypt**

### 💬 Real-Time Messaging
- Instant message delivery via **Socket.io**
- Persistent message history with **MongoDB**
- Live UI updates without page refresh

### 🟢 Presence & Status
- Online user list updates in real time
- Instant connect/disconnect detection

</td>
<td width="50%">

### 📩 Notifications
- Unread message counters per conversation
- Visual badge indicators in the sidebar

### 🔍 User Discovery
- Search users by name in real time

### 👤 Profile Management
- Update display name and bio
- Upload & store profile pictures via **Cloudinary**

### ⚡ Performance & UX
- Lightning-fast frontend powered by **Vite**
- Responsive layout for all screen sizes
- Clean, intuitive UI built with Tailwind CSS

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI |
| **Vite** | Build tool & dev server |
| **Context API** | Global state management |
| **Axios** | HTTP requests |
| **Socket.io Client** | Real-time WebSocket communication |
| **Tailwind CSS** | Utility-first styling |

### Backend
| Technology | Purpose |
|---|---|
| **Node.js + Express** | REST API server |
| **MongoDB + Mongoose** | Database & ODM |
| **Socket.io** | WebSocket server |
| **JSON Web Tokens** | Authentication |
| **Bcrypt** | Password hashing |
| **Cloudinary** | Image storage & CDN |

---

## 📂 Project Structure

```
ChatApp/
│
├── 📁 client/                    # React frontend (Vite)
│   ├── 📁 context/
│   │   ├── AuthContext.jsx        # Auth state & actions
│   │   └── ChatContext.jsx        # Chat state & socket events
│   │
│   └── 📁 src/
│       ├── 📁 assets/             # Static assets
│       ├── 📁 components/
│       │   ├── ChatContainer.jsx  # Main chat window
│       │   ├── Sidebar.jsx        # User list & search
│       │   └── RightSidebar.jsx   # User info panel
│       │
│       ├── 📁 pages/
│       │   ├── HomePage.jsx       # Main chat layout
│       │   ├── LoginPage.jsx      # Auth page
│       │   └── ProfilePage.jsx    # Profile management
│       │
│       ├── App.jsx                # Routes & providers
│       ├── main.jsx               # React entry point
│       └── index.css              # Global styles
│
├── 📁 server/                     # Node.js backend
│   ├── 📁 controllers/
│   │   ├── messageController.js   # Message logic
│   │   └── userController.js      # User logic
│   │
│   ├── 📁 middleware/
│   │   └── auth.js                # JWT verification
│   │
│   ├── 📁 models/
│   │   ├── Message.js             # Message schema
│   │   └── User.js                # User schema
│   │
│   ├── 📁 routes/
│   │   ├── messageRoutes.js       # /api/messages/*
│   │   └── userRoutes.js          # /api/users/*
│   │
│   ├── 📁 lib/
│   │   ├── db.js                  # MongoDB connection
│   │   ├── cloudinary.js          # Cloudinary config
│   │   └── utils.js               # Helper functions
│   │
│   └── server.js                  # Express + Socket.io entry
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account
- A [Cloudinary](https://cloudinary.com/) account

### 1. Clone the Repository

```bash
git clone https://github.com/Riyaban583/ChatApp.git
cd ChatApp
```

### 2. Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 3. Configure Environment Variables

See the [Environment Variables](#-environment-variables) section below.

### 4. Run the Application

```bash
# Terminal 1 — Start the backend
cd server && npm run dev

# Terminal 2 — Start the frontend
cd client && npm run dev
```

| Service | URL |
|---|---|
| **Frontend** | http://localhost:5173 |
| **Backend API** | http://localhost:5000 |

---

## 🔑 Environment Variables

Create a `.env` file inside the `/server` directory:

```env
# ── Server ──────────────────────────────
PORT=5000

# ── Database ────────────────────────────
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/chatapp

# ── Authentication ───────────────────────
JWT_SECRET=your_super_secret_key_here

# ── Cloudinary ───────────────────────────
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Security Warning:** Never commit your `.env` file. It's already in `.gitignore` — keep it that way.

---

## 📡 API Reference

### 👤 User Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/users/signup` | ❌ | Register a new user |
| `POST` | `/api/users/login` | ❌ | Login and receive JWT |
| `GET` | `/api/users/check` | ✅ | Verify auth token |
| `PUT` | `/api/users/update-profile` | ✅ | Update profile info |

### 💬 Message Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/messages/send` | ✅ | Send a message |
| `GET` | `/api/messages/:id` | ✅ | Get conversation history |

> ✅ = Requires `Authorization: Bearer <token>` header

---

## 🔌 Socket Events

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | — | User connects to WebSocket |
| `getOnlineUsers` | Server → Client | `userId[]` | Broadcasts current online users |
| `newMessage` | Server → Client | `message` | Delivers a new message in real time |
| `disconnect` | Client → Server | — | User disconnects, status updated |

---

## 📸 Screenshots

> 📷 *Screenshots coming soon — contributions welcome!*

| Login Page | Chat Dashboard |
|---|---|
| ![Login](https://via.placeholder.com/400x250?text=Login+Page) | ![Chat](https://via.placeholder.com/400x250?text=Chat+Dashboard) |

| Profile Page | Online Users |
|---|---|
| ![Profile](https://via.placeholder.com/400x250?text=Profile+Page) | ![Online](https://via.placeholder.com/400x250?text=Online+Users) |

---

## 🗺️ Roadmap

- [x] Real-time messaging via Socket.io
- [x] JWT authentication
- [x] Profile image upload (Cloudinary)
- [x] Online/offline status
- [x] Unread message counters
- [ ] ⌨️ Typing indicators
- [ ] ✅ Message read receipts (seen status)
- [ ] 👥 Group chat rooms
- [ ] 📎 File & media sharing
- [ ] 🔔 Push notifications
- [ ] 🎥 Voice & video calling (WebRTC)
- [ ] 🌙 Dark / light mode toggle
- [ ] 📱 Progressive Web App (PWA) support

---

## ☁️ Deployment

### Frontend
Deploy the `/client` build to:
- **[Vercel](https://vercel.com/)** *(recommended — zero config for Vite)*
- **[Netlify](https://netlify.com/)**

### Backend
Deploy the `/server` to:
- **[Render](https://render.com/)** *(recommended — free tier available)*
- **[Railway](https://railway.app/)**
- **[AWS EC2](https://aws.amazon.com/ec2/)**

### Database
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** *(free M0 cluster available)*

> 💡 **Tip:** Set all environment variables in your hosting provider's dashboard — never in your codebase.

---

## 👩‍💻 Author

<div align="center">

**Riya Bansal**

*Full Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-Riyaban583-181717?style=for-the-badge&logo=github)](https://github.com/Riyaban583)

<br/>

*Built with ❤️ and lots of ☕*

<br/>

---

⭐ **Found this useful?** Give it a star on GitHub — it means a lot and helps others discover this project!

</div>
