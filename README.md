<div align="center">

<img src="https://img.shields.io/badge/-%F0%9F%92%AC%20ChatApp-ff6b6b?style=for-the-badge&labelColor=0c0e13&color=ff6b6b" alt="ChatApp" height="42"/>

<br/>
<br/>

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=0c0e13)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js&logoColor=white&labelColor=0c0e13)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=flat-square&logo=mongodb&logoColor=white&labelColor=0c0e13)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.x-010101?style=flat-square&logo=socket.io&logoColor=white&labelColor=0c0e13)](https://socket.io/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white&labelColor=0c0e13)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=0c0e13)](https://vitejs.dev/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Images-3448C5?style=flat-square&logo=cloudinary&logoColor=white&labelColor=0c0e13)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-FF6B6B?style=flat-square&logo=jsonwebtokens&logoColor=white&labelColor=0c0e13)](https://jwt.io/)
[![License](https://img.shields.io/badge/License-MIT-4ecdc4?style=flat-square&labelColor=0c0e13)](LICENSE)

<br/>

**A production-grade, full-stack real-time chat application.**  
Built with React, Node.js, Express, MongoDB, and Socket.io — featuring message replies, emoji reactions, read receipts, pinned messages, and a polished dark UI.

<br/>

[**🚀 Live Demo**](#-deployment) · [**📖 Docs**](#-api-reference) · [**🐛 Report Bug**](https://github.com/Riyaban583/ChatApp/issues) · [**✨ Request Feature**](https://github.com/Riyaban583/ChatApp/issues)

</div>

---

## 📸 Screenshots

<div align="center">

| Login Page | Chat Dashboard | Profile Page |
|:---:|:---:|:---:|
| ![Login](screenshots/login.png) | ![Chat](screenshots/chat.png) | ![Profile](screenshots/profile.png) |
| *JWT-secured auth with signup toggle* | *Real-time messaging with reactions* | *Avatar upload & bio editor* |

</div>

---

## ✨ Feature Highlights

<table>
<tr>
<td width="50%">

### 🔐 Authentication
- User signup & login with **form validation**
- **JWT tokens** stored in `httpOnly` cookies (XSS-safe)
- Auto session refresh with Axios interceptor
- Protected & public route guards
- **Change password** with current-password verification

</td>
<td width="50%">

### 💬 Real-Time Messaging
- Instant send/receive via **Socket.io WebSockets**
- **Typing indicators** — live "typing…" in chat and sidebar
- **Message reply / quote** — tap ↩ to quote any message
- **Edit messages** — fix typos after sending
- **Soft delete** — remove for yourself only

</td>
</tr>
<tr>
<td width="50%">

### 💡 Smart UI
- **Date separators** — Today / Yesterday / weekday dividers
- **Scroll-to-bottom** floating button
- **Full-screen image viewer** — click any photo to zoom
- **Emoji picker** — 30-emoji panel in the input toolbar
- **Skeleton loaders** — shimmer placeholders while loading

</td>
<td width="50%">

### 📌 Advanced Features
- **Pin messages** — pinned bar with multi-message cycling
- **Emoji reactions** — ❤️ 😂 👍 😮 😢 🔥 🎉 👀 (toggle on/off)
- **Read receipts** — ✓ sent → ✓✓ teal when seen
- **Unread badges** — per-contact + global total counter
- **Shared media gallery** in the right sidebar

</td>
</tr>
<tr>
<td width="50%">

### 👤 User Profiles
- Upload **profile picture** (Cloudinary CDN)
- Edit **full name** and **bio** (160 chars)
- View member since, words exchanged, active status
- Last seen timestamp updated on logout

</td>
<td width="50%">

### 🔍 Contacts & Search
- **Debounced live search** (300ms) by name or email
- **Online-only filter** toggle
- Contact list sorted by most recent message
- Last message preview with smart relative timestamps

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|:---|:---:|:---|
| [React](https://reactjs.org/) | 18.x | UI framework |
| [Vite](https://vitejs.dev/) | 5.x | Build tool & dev server |
| [React Router](https://reactrouter.com/) | 6.x | Client-side routing |
| [Axios](https://axios-http.com/) | 1.x | HTTP client with interceptors |
| [Socket.io Client](https://socket.io/) | 4.x | WebSocket real-time layer |
| [React Hot Toast](https://react-hot-toast.com/) | 2.x | Toast notifications |
| Context API | built-in | Global state (no Redux needed) |

### Backend
| Technology | Version | Purpose |
|:---|:---:|:---|
| [Node.js](https://nodejs.org/) | 18.x | Runtime |
| [Express](https://expressjs.com/) | 4.x | REST API framework |
| [MongoDB](https://mongodb.com/) | 7.x | Document database |
| [Mongoose](https://mongoosejs.com/) | 8.x | ODM & schema validation |
| [Socket.io](https://socket.io/) | 4.x | WebSocket server |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | 2.x | Password hashing (cost=12) |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) | 9.x | JWT generation & verification |
| [Cloudinary](https://cloudinary.com/) | 1.x | Image upload & CDN |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | 1.x | httpOnly cookie handling |

---

## 📂 Project Structure

```
ChatApp/
│
├── client/                         # React + Vite frontend
│   └── src/
│       ├── context/
│       │   ├── AuthContext.jsx     # Auth state, Axios instance, interceptors
│       │   └── ChatContext.jsx     # Messages, socket, typing, reactions, pins
│       │
│       ├── components/
│       │   ├── Sidebar.jsx         # Contact list, search, unread badges
│       │   ├── ChatContainer.jsx   # Message area, reactions, typing, seen
│       │   └── RightSidebar.jsx    # Tabs: Media / Pinned / Info
│       │
│       ├── pages/
│       │   ├── HomePage.jsx        # Main layout (Sidebar + Chat + RightSidebar)
│       │   ├── LoginPage.jsx       # Login + Signup combined
│       │   └── ProfilePage.jsx     # Avatar, bio, change password
│       │
│       ├── App.jsx                 # Router with protected / public routes
│       ├── main.jsx                # React entry point
│       └── index.css               # Design system, CSS variables, animations
│
├── server/                         # Node.js + Express backend
│   ├── controllers/
│   │   ├── messageController.js    # CRUD, seen, reactions, pin, edit, delete
│   │   └── userController.js       # Auth, profile, search, password
│   │
│   ├── models/
│   │   ├── Message.js              # seen, seenAt, reactions[], replyTo, isPinned
│   │   └── User.js                 # bio, lastSeen, profilePic
│   │
│   ├── routes/
│   │   ├── messageRoutes.js        # /api/messages/*
│   │   └── userRoutes.js           # /api/auth/*
│   │
│   ├── middleware/
│   │   └── auth.js                 # JWT protectRoute middleware
│   │
│   ├── lib/
│   │   ├── db.js                   # MongoDB connection
│   │   ├── cloudinary.js           # Cloudinary config
│   │   └── utils.js                # generateToken helper
│   │
│   └── server.js                   # Express app + Socket.io setup
│
├── .gitignore
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

| Tool | Version | Download |
|:---|:---:|:---|
| Node.js | ≥ 18.x | [nodejs.org](https://nodejs.org/) |
| npm | ≥ 9.x | Comes with Node.js |
| MongoDB | ≥ 6.x | [mongodb.com](https://mongodb.com/) or use [Atlas](https://cloud.mongodb.com/) |
| Git | any | [git-scm.com](https://git-scm.com/) |

You'll also need a free [Cloudinary account](https://cloudinary.com/) for image uploads.

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Riyaban583/ChatApp.git
cd ChatApp
```

### 2️⃣ Install Dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file inside the `server/` folder:

```bash
cp server/.env.example server/.env
```

Then open `server/.env` and fill in your values:

```env
# Server
PORT=5000
NODE_ENV=development

# Database
MONGO_URI=mongodb://localhost:27017/chatapp
# Or for Atlas: mongodb+srv://<user>:<pass>@cluster.mongodb.net/chatapp

# Authentication
JWT_SECRET=replace_with_a_long_random_string_minimum_32_chars

# Cloudinary (get from cloudinary.com → Dashboard)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# CORS
CLIENT_URL=http://localhost:5173
```

> ⚠️ **Never commit `.env` to version control.** It's already included in `.gitignore`.

### 4️⃣ Run the Application

Open **two terminals**:

```bash
# Terminal 1 — Start backend (http://localhost:5000)
cd server
npm run dev
```

```bash
# Terminal 2 — Start frontend (http://localhost:5173)
cd client
npm run dev
```

Then open your browser at **[http://localhost:5173](http://localhost:5173)** 🎉

---

## 📡 API Reference

### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `POST` | `/signup` | ❌ | Register a new user |
| `POST` | `/login` | ❌ | Login + set JWT cookie |
| `POST` | `/logout` | ✅ | Clear cookie + update lastSeen |
| `GET` | `/me` | ✅ | Get current logged-in user |
| `PUT` | `/update-profile` | ✅ | Update name, bio, avatar |
| `PUT` | `/change-password` | ✅ | Change password (requires current) |
| `GET` | `/search?q=` | ✅ | Search users by name or email |

### 💬 Message Routes — `/api/messages`

| Method | Endpoint | Auth | Description |
|:---:|:---|:---:|:---|
| `GET` | `/users` | ✅ | Get sidebar users + unread counts |
| `GET` | `/:id` | ✅ | Load conversation + mark as seen |
| `GET` | `/:id/pinned` | ✅ | Get pinned messages |
| `POST` | `/send/:id` | ✅ | Send message (text / image / reply) |
| `PATCH` | `/:id/edit` | ✅ | Edit own message text |
| `PATCH` | `/:id/seen` | ✅ | Mark message as seen |
| `PATCH` | `/:id/react` | ✅ | Add / toggle emoji reaction |
| `PATCH` | `/:id/pin` | ✅ | Toggle pin on a message |
| `DELETE` | `/:id` | ✅ | Soft-delete message for self |

> All protected routes (✅) require a valid `jwt` httpOnly cookie.  
> Error responses follow the shape: `{ "message": "string" }`.

---

## 🔌 Socket.io Events

### Client → Server

| Event | Payload | Description |
|:---|:---|:---|
| `typing` | `{ to: userId }` | User started typing |
| `stopTyping` | `{ to: userId }` | User stopped typing |
| `messageSeen` | `{ messageId, senderId }` | Notify sender message was read |

### Server → Client

| Event | Payload | Description |
|:---|:---|:---|
| `getOnlineUsers` | `[userId, ...]` | Broadcast updated online users list |
| `newMessage` | `Message object` | Deliver incoming message |
| `userTyping` | `{ from: userId }` | Someone is typing |
| `userStopTyping` | `{ from: userId }` | Someone stopped typing |
| `messageSeenAck` | `{ messageId }` | Confirm message was seen |
| `messageEdited` | `Message object` | Message was edited |
| `messageReacted` | `Message object` | Reaction was added/changed |
| `messagePinned` | `Message object` | Message was pinned/unpinned |

---

## 🗄️ Database Schema

### User
```js
{
  fullName:   String,          // required, 2–50 chars
  email:      String,          // unique, lowercase
  password:   String,          // bcrypt hashed, cost=12
  profilePic: String,          // Cloudinary URL
  bio:        String,          // max 160 chars
  lastSeen:   Date,
  createdAt:  Date,
  updatedAt:  Date
}
```

### Message
```js
{
  senderId:   ObjectId → User,
  receiverId: ObjectId → User,
  text:       String,
  image:      String,          // Cloudinary URL
  replyTo:    ObjectId → Message,   // self-reference for quotes
  isEdited:   Boolean,
  editedAt:   Date,
  seen:       Boolean,
  seenAt:     Date,
  reactions:  [{ userId: ObjectId, emoji: String }],
  isPinned:   Boolean,
  deletedFor: [ObjectId],      // soft-delete per user
  createdAt:  Date,
  updatedAt:  Date
}
// Index: { senderId, receiverId, createdAt } for fast queries
```

---

## 🚀 Deployment

### Frontend → [Vercel](https://vercel.com/) *(recommended)*

```bash
cd client
npm run build
# Deploy the dist/ folder to Vercel
```

Set environment variable in Vercel dashboard:
```
VITE_API_URL=https://your-backend.onrender.com/api
VITE_SOCKET_URL=https://your-backend.onrender.com
```

### Backend → [Render](https://render.com/) *(recommended)*

1. Create a new **Web Service** pointing to the `server/` folder
2. Set **Build Command**: `npm install`
3. Set **Start Command**: `npm start`
4. Add all environment variables from `.env`

### Database → [MongoDB Atlas](https://cloud.mongodb.com/)

1. Create a free M0 cluster
2. Whitelist `0.0.0.0/0` (or your server IP)
3. Copy the connection string into `MONGO_URI`

---

## 🔮 Roadmap

- [x] Real-time messaging
- [x] Online / offline status
- [x] Typing indicators
- [x] Read receipts (✓✓)
- [x] Emoji reactions
- [x] Message reply / quote
- [x] Edit & soft-delete messages
- [x] Pin messages
- [x] Image sharing (Cloudinary)
- [x] User search
- [x] Unread message badges
- [ ] **Group chats** *(in progress)*
- [ ] Voice messages
- [ ] File sharing (PDF, docs)
- [ ] Message forwarding
- [ ] Push notifications (PWA)
- [ ] End-to-end encryption
- [ ] Video / voice calling (WebRTC)
- [ ] Message search / full-text index

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/ChatApp.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes, then commit
git commit -m "feat: add your feature description"

# 5. Push and open a Pull Request
git push origin feature/your-feature-name
```

Please follow the [Conventional Commits](https://www.conventionalcommits.org/) format for commit messages.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
MIT License — Copyright (c) 2024 Riya Bansal
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software...
```

---

<div align="center">

**Built with ❤️ by [Riya Bansal](https://github.com/Riyaban583)**

[![GitHub](https://img.shields.io/badge/GitHub-Riyaban583-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/Riyaban583)

<br/>

⭐ **If this project helped you, please give it a star on GitHub!** ⭐

<br/>

*Found a bug? Have a suggestion? [Open an issue](https://github.com/Riyaban583/ChatApp/issues) — contributions are always welcome.*

</div>
