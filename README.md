<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366f1,100:06b6d4&height=200&section=header&text=ChatApp&fontSize=80&fontColor=ffffff&fontAlignY=35&desc=Real-Time%20Full%20Stack%20Chat%20Application&descAlignY=55&descSize=20&animation=fadeIn" width="100%"/>

<br/>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=6366F1&center=true&vCenter=true&width=600&lines=Connect.+Communicate.+Instantly.;Built+with+React+%2B+Node.js+%2B+Socket.io;Real-Time+Messaging+%E2%9A%A1;JWT+Auth+%7C+MongoDB+%7C+Cloudinary" alt="Typing SVG" />

<br/><br/>

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Images-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![License](https://img.shields.io/badge/License-MIT-F7DF1E?style=for-the-badge)](LICENSE)

<br/>

[![GitHub Stars](https://img.shields.io/github/stars/Riyaban583/ChatApp?style=social)](https://github.com/Riyaban583/ChatApp/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Riyaban583/ChatApp?style=social)](https://github.com/Riyaban583/ChatApp/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Riyaban583/ChatApp?style=social)](https://github.com/Riyaban583/ChatApp/issues)

<br/>

[🚀 Live Demo](#) &nbsp;·&nbsp; [📖 API Docs](#-api-reference) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/Riyaban583/ChatApp/issues) &nbsp;·&nbsp; [✨ Request Feature](https://github.com/Riyaban583/ChatApp/issues)

<br/>

</div>

---

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
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

<img align="right" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ6dGJlbHFia3hrYWkzdjZzbzM0M3ZiZngyMGFteXZkb3BxYmUyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif" width="280" />

**ChatApp** is a production-ready, full-stack real-time chat application that enables seamless instant messaging between users. Built on a modern JavaScript ecosystem, it demonstrates best practices in:

- ⚡ Real-time WebSocket communication
- 🔐 Secure JWT authentication
- 🏗️ Scalable REST API design
- 🎨 Modern React frontend architecture of website

Whether you're exploring WebSocket-based communication or using this as a foundation for your own project, ChatApp covers the fundamentals with clean, readable, well-structured code.

> 💡 **Key highlight:** Every message is delivered **instantly** via Socket.io — no polling, no delays, no refresh needed.

<br clear="right"/>

---

## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

### 🔐 Authentication & Security
![Auth](https://img.shields.io/badge/-JWT%20Protected-000000?style=flat-square&logo=jsonwebtokens)
- User registration & login flows
- **JWT-based** session management
- Protected routes on client & server
- Passwords hashed with JWT authentication. **bcrypt**

### 💬 Real-Time Messaging
![Socket](https://img.shields.io/badge/-Socket.io%20Powered-010101?style=flat-square&logo=socket.io)
- Instant delivery via **WebSockets**
- Persistent history stored in **MongoDB**
- Live UI updates — zero page refresh

### 🟢 Presence & Status
![Online](https://img.shields.io/badge/-Live%20Online%20Status-22c55e?style=flat-square)
- Real-time online user list
- Instant connect/disconnect detection

</td>
<td width="50%" valign="top">

### 📩 Notifications
![Notif](https://img.shields.io/badge/-Unread%20Counters-ef4444?style=flat-square)
- Per-conversation unread message counts
- Visual badge indicators in the sidebar

### 🔍 User Discovery
![Search](https://img.shields.io/badge/-Live%20Search-6366f1?style=flat-square)
- Search users by name in real time

### 👤 Profile Management
![Profile](https://img.shields.io/badge/-Cloudinary%20Images-3448C5?style=flat-square&logo=cloudinary)
- Update display name and bio
- Upload profile pictures via **Cloudinary CDN**

### ⚡ Performance & UX
![Vite](https://img.shields.io/badge/-Vite%20Powered-646CFF?style=flat-square&logo=vite&logoColor=white)
- Lightning-fast builds with **Vite**
- Responsive across all screen sizes
- Clean UI with **Tailwind CSS**

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Frontend

<p>
  <img src="https://skillicons.dev/icons?i=react,vite,js,tailwind,html,css" />
</p>

| Technology | Version | Purpose |
|---|---|---|
| ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) **React** | 18 | Component-based UI framework |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) **Vite** | 5 | Build tool & lightning-fast dev server |
| ![JS](https://img.shields.io/badge/Context_API-F7DF1E?style=flat-square&logo=javascript&logoColor=black) **Context API** | — | Global state management |
| ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) **Axios** | — | HTTP client for API calls |
| ![Socket.io](https://img.shields.io/badge/Socket.io_Client-010101?style=flat-square&logo=socket.io) **Socket.io Client** | 4 | Real-time WebSocket communication |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) **Tailwind CSS** | — | Utility-first responsive styling |

### Backend

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,redis" />
</p>

| Technology | Version | Purpose |
|---|---|---|
| ![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) **Node.js** | 20 | JavaScript runtime |
| ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) **Express.js** | 4 | REST API web framework |
| ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) **MongoDB** | — | NoSQL document database |
| ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square) **Mongoose** | — | MongoDB object data modeling |
| ![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io) **Socket.io** | 4 | Real-time WebSocket server |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) **JSON Web Tokens** | — | Stateless authentication |
| ![Bcrypt](https://img.shields.io/badge/Bcrypt-grey?style=flat-square) **Bcrypt** | — | Password hashing |
| ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white) **Cloudinary** | — | Cloud image storage & CDN |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (React)                     │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────────────────┐  │
│  │AuthContext│  │ChatContext│  │Pages / Components    │  │
│  └────┬─────┘  └────┬─────┘  └──────────────────────┘  │
│       │              │                                   │
│       │    Axios     │  Socket.io Client                 │
└───────┼──────────────┼───────────────────────────────────┘
        │              │
        ▼              ▼
┌───────────────────────────────────────────────┐
│              SERVER (Node + Express)           │
│                                               │
│  ┌──────────┐  ┌──────────┐  ┌────────────┐  │
│  │  Routes  │→ │Controllers│→ │ Middleware │  │
│  └──────────┘  └────┬─────┘  └────────────┘  │
│                     │                         │
│       ┌─────────────┼──────────────┐          │
│       ▼             ▼              ▼          │
│  ┌─────────┐  ┌──────────┐  ┌──────────┐    │
│  │ MongoDB │  │Socket.io │  │Cloudinary│    │
│  │(Mongoose)│  │  Server  │  │   CDN    │    │
│  └─────────┘  └──────────┘  └──────────┘    │
└───────────────────────────────────────────────┘
```

**Data Flow:**
1. Client sends HTTP requests via **Axios** → Express route → Controller → MongoDB
2. Real-time events travel over **WebSocket** (Socket.io) bidirectionally
3. Profile images upload to **Cloudinary** and the URL is stored in MongoDB

---

## 📂 Project Structure

```
ChatApp/
│
├── 📁 client/                      # ⚛️  React frontend (Vite)
│   ├── 📁 context/
│   │   ├── AuthContext.jsx          # 🔐 Auth state & actions
│   │   └── ChatContext.jsx          # 💬 Chat state & socket events
│   │
│   └── 📁 src/
│       ├── 📁 assets/               # 🖼️  Static assets
│       ├── 📁 components/
│       │   ├── ChatContainer.jsx    # 💬 Main message window
│       │   ├── Sidebar.jsx          # 👥 User list & search bar
│       │   └── RightSidebar.jsx     # ℹ️  Selected user info panel
│       │
│       ├── 📁 pages/
│       │   ├── HomePage.jsx         # 🏠 Main chat layout
│       │   ├── LoginPage.jsx        # 🔑 Auth page (login/signup)
│       │   └── ProfilePage.jsx      # 👤 Profile management
│       │
│       ├── App.jsx                  # 🔀 Routes & context providers
│       ├── main.jsx                 # 🚀 React entry point
│       └── index.css                # 🎨 Global styles
│
├── 📁 server/                       # 🟢 Node.js backend
│   ├── 📁 controllers/
│   │   ├── messageController.js     # 📨 Message send/get logic
│   │   └── userController.js        # 👤 User auth & profile logic
│   │
│   ├── 📁 middleware/
│   │   └── auth.js                  # 🛡️  JWT verification middleware
│   │
│   ├── 📁 models/
│   │   ├── Message.js               # 📄 Message Mongoose schema
│   │   └── User.js                  # 📄 User Mongoose schema
│   │
│   ├── 📁 routes/
│   │   ├── messageRoutes.js         # 📡 /api/messages/* endpoints
│   │   └── userRoutes.js            # 📡 /api/users/* endpoints
│   │
│   ├── 📁 lib/
│   │   ├── db.js                    # 🗄️  MongoDB connection setup
│   │   ├── cloudinary.js            # ☁️  Cloudinary config
│   │   └── utils.js                 # 🔧 Helper utilities
│   │
│   └── server.js                    # ⚡ Express + Socket.io entry
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

<p>
  <img src="https://skillicons.dev/icons?i=nodejs,npm,mongodb,git" />
</p>

| Tool | Version | Link |
|---|---|---|
| ![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white) **Node.js** | `v18+` | [nodejs.org](https://nodejs.org/) |
| ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) **npm** | `v9+` | [npmjs.com](https://npmjs.com/) |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) **Git** | Latest | [git-scm.com](https://git-scm.com/) |
| ![MongoDB](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white) **MongoDB Atlas** | Free tier | [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas) |
| ![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white) **Cloudinary** | Free tier | [cloudinary.com](https://cloudinary.com/) |

---

### Step-by-Step Setup

**① Clone the repository**
```bash
git clone https://github.com/Riyaban583/ChatApp.git
cd ChatApp
```

**② Install dependencies**
```bash
# Backend
cd server && npm install

# Frontend
cd ../client && npm install
```

**③ Configure environment variables**
```bash
# Create .env in /server (see Environment Variables section)
touch server/.env
```

**④ Run the application**
```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

**⑤ Open in browser**

| Service | URL |
|---|---|
| 🌐 **Frontend** | http://localhost:5173 |
| ⚙️ **Backend API** | http://localhost:5000 |

---

## 🔑 Environment Variables

Create a `.env` file inside the `/server` folder:

```env
# ┌─────────────────────────────────────┐
# │             SERVER CONFIG            │
# └─────────────────────────────────────┘
PORT=5000

# ┌─────────────────────────────────────┐
# │           DATABASE (MongoDB)         │
# └─────────────────────────────────────┘
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/chatapp

# ┌─────────────────────────────────────┐
# │         AUTHENTICATION (JWT)         │
# └─────────────────────────────────────┘
JWT_SECRET=your_super_secret_key_here_make_it_long_and_random

# ┌─────────────────────────────────────┐
# │        IMAGE STORAGE (Cloudinary)    │
# └─────────────────────────────────────┘
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Security Warning:** Never commit `.env` to version control. Add it to `.gitignore` and rotate any secrets that are accidentally exposed.

---

## 📡 API Reference

### 👤 User Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/users/signup` | ❌ Public | Register a new user |
| `POST` | `/api/users/login` | ❌ Public | Login and receive JWT token |
| `GET` | `/api/users/check` | ✅ JWT | Verify current auth token |
| `PUT` | `/api/users/update-profile` | ✅ JWT | Update profile name / avatar |

### 💬 Message Endpoints

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/messages/send` | ✅ JWT | Send a new message |
| `GET` | `/api/messages/:id` | ✅ JWT | Fetch full conversation history |

> ✅ Protected routes require `Authorization: Bearer <token>` in the request header.

---

## 🔌 Socket Events

```
Client ──────────────────────────────────────── Server
  │                                                │
  │──── connection ────────────────────────────►  │
  │                                                │
  │  ◄──── getOnlineUsers [ userId[] ] ──────────  │
  │                                                │
  │──── sendMessage { to, text } ──────────────►  │
  │                                                │
  │  ◄──── newMessage { from, text, timestamp } ─  │
  │                                                │
  │──── disconnect ─────────────────────────────►  │
  │                                                │
  │  ◄──── getOnlineUsers (updated) ─────────────  │
```

| Event | Direction | Payload | Description |
|---|---|---|---|
| `connection` | Client → Server | — | User establishes WebSocket connection |
| `getOnlineUsers` | Server → Client | `userId[]` | Broadcasts updated list of online users |
| `newMessage` | Server → Client | `message` | Delivers incoming message in real time |
| `disconnect` | Client → Server | — | User disconnects; status updated for all |

---



</div>

**Completed ✅**
- [x] 💬 Real-time messaging via Socket.io
- [x] 🔐 JWT authentication & protected routes
- [x] 🖼️ Profile image upload (Cloudinary)
- [x] 🟢 Live online/offline status indicators
- [x] 📩 Unread message counters
- [x] 🔍 User search by name

**Coming Soon 🚧**
- [ ] ⌨️ Typing indicators
- [ ] ✅ Message read receipts (seen status)
- [ ] 👥 Group chat rooms
- [ ] 📎 File & media attachment sharing
- [ ] 🔔 Browser push notifications
- [ ] 🎥 Voice & video calling (WebRTC)
- [ ] 🌙 Dark / light mode toggle
- [ ] 📱 Progressive Web App (PWA) support
- [ ] 🌍 Multi-language support (i18n)

---

## ☁️ Deployment

<p>
  <img src="https://skillicons.dev/icons?i=vercel,netlify,aws" />
</p>

### Frontend — Deploy `/client`

| Platform | Notes |
|---|---|
| [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel)](https://vercel.com/) **Vercel** ⭐ | Zero config for Vite, instant deploys, recommended |
| [![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)](https://netlify.com/) **Netlify** | Great free tier, good alternative |

### Backend — Deploy `/server`

| Platform | Notes |
|---|---|
| [![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=black)](https://render.com/) **Render** ⭐ | Free tier available, recommended for beginners |
| [![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=flat-square&logo=railway&logoColor=white)](https://railway.app/) **Railway** | Simple deploys, excellent DX |
| [![AWS](https://img.shields.io/badge/AWS_EC2-FF9900?style=flat-square&logo=amazonaws&logoColor=white)](https://aws.amazon.com/ec2/) **AWS EC2** | Production-grade, full control |

### Database

[![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-Free_M0_Cluster-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)

> 💡 **Pro Tip:** Set all environment variables in your hosting provider's settings dashboard — never hardcode secrets in your codebase.

---

## 👩‍💻 Author

<div align="center">

<img src="https://avatars.githubusercontent.com/Riyaban583" width="100" style="border-radius:50%;" />

### Riya Bansal

*Full Stack Developer*

[![GitHub](https://img.shields.io/badge/GitHub-Riyaban583-181717?style=for-the-badge&logo=github)](https://github.com/Riyaban583)
[![Profile Views](https://komarev.com/ghpvc/?username=Riyaban583&style=for-the-badge&color=6366f1&label=Profile+Views)](https://github.com/Riyaban583)

<br/>

*Built with ❤️ and lots of ☕*

<br/>

---

### ⭐ Support This Project

If ChatApp helped you learn or saved you time, a **GitHub star** goes a long way!

[![Star on GitHub](https://img.shields.io/badge/⭐_Star_on_GitHub-181717?style=for-the-badge&logo=github)](https://github.com/Riyaban583/ChatApp)

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06b6d4,100:6366f1&height=120&section=footer" width="100%"/>

</div>
