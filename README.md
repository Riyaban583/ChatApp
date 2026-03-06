<!-- HEADER -->
<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=180&section=header&text=💬%20ChatApp&fontSize=52&fontColor=ffffff&animation=twinkling&fontAlignY=36&desc=Real-Time%20Full-Stack%20Chat%20Application&descAlignY=58&descSize=18&descColor=cccccc" width="100%" />

<br/>

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=0c0e13)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white&labelColor=0c0e13)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white&labelColor=0c0e13)](https://mongodb.com/)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.x-white?style=for-the-badge&logo=socketdotio&logoColor=black&labelColor=0c0e13)](https://socket.io/)

<br/>

[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white&labelColor=1a1a2e)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=1a1a2e)](https://vitejs.dev/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-CDN-3448C5?style=flat-square&logo=cloudinary&logoColor=white&labelColor=1a1a2e)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-FF6B6B?style=flat-square&logo=jsonwebtokens&logoColor=white&labelColor=1a1a2e)](https://jwt.io/)
[![bcrypt](https://img.shields.io/badge/bcrypt-cost%3D12-orange?style=flat-square&labelColor=1a1a2e)](https://github.com/dcodeIO/bcrypt.js)
[![License](https://img.shields.io/badge/License-MIT-4ecdc4?style=flat-square&labelColor=1a1a2e)](LICENSE)

<br/>

![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square&labelColor=1a1a2e)
![Maintained](https://img.shields.io/badge/Maintained-Yes-4ecdc4?style=flat-square&labelColor=1a1a2e)
![Stars](https://img.shields.io/github/stars/Riyaban583/ChatApp?style=flat-square&labelColor=1a1a2e&color=ff6b6b)
![Forks](https://img.shields.io/github/forks/Riyaban583/ChatApp?style=flat-square&labelColor=1a1a2e&color=ff8e53)
![Issues](https://img.shields.io/github/issues/Riyaban583/ChatApp?style=flat-square&labelColor=1a1a2e&color=4ecdc4)
![Last Commit](https://img.shields.io/github/last-commit/Riyaban583/ChatApp?style=flat-square&labelColor=1a1a2e&color=a78bfa)

<br/>

**A production-grade, full-stack real-time chat application.**

Featuring message replies · emoji reactions · read receipts · pinned messages · typing indicators · image sharing · and a sleek custom dark UI.

<br/>

[🚀 **Live Demo**](#-deployment-guide) &nbsp;·&nbsp;
[📖 **API Docs**](#-api-reference) &nbsp;·&nbsp;
[⚡ **Quick Start**](#-quick-start) &nbsp;·&nbsp;
[🐛 **Report Bug**](https://github.com/Riyaban583/ChatApp/issues/new?template=bug_report.md) &nbsp;·&nbsp;
[✨ **Request Feature**](https://github.com/Riyaban583/ChatApp/issues/new?template=feature_request.md)

<br/>

</div>

---



- [📸 Screenshots](#-screenshots)
- [✨ Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
- [📡 API Reference](#-api-reference)
- [🔌 Socket.io Events](#-socketio-events)
- [🗄️ Database Schema](#️-database-schema)
- [🔒 Security](#-security)
- [⚡ Performance](#-performance)
- [🧪 Testing](#-testing)
- [🚀 Deployment Guide](#-deployment-guide)
- [🔧 Troubleshooting](#-troubleshooting)
- [📈 Changelog](#-changelog)
- [🔮 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

</details>

---



## ✨ Features

<table>
<tr>
<td width="50%" valign="top">

#### 🔐 Authentication & Security
```
✅ Signup with full field validation
✅ Secure login — JWT in httpOnly cookie
✅ XSS-proof: cookies inaccessible to JS
✅ bcrypt hashing (cost factor 12)
✅ Auto 401 handling via Axios interceptor
✅ Protected + public route guards
✅ Change password with current-pass check
✅ lastSeen timestamp updated on logout
```

</td>
<td width="50%" valign="top">

#### 💬 Real-Time Messaging
```
✅ Instant send/receive via Socket.io
✅ Message reply/quote + jump-to-original
✅ Edit own messages (live sync)
✅ Soft delete — hidden per user only
✅ Typing indicators in chat + sidebar
✅ Image sharing via Cloudinary CDN
✅ Full-screen lightbox image viewer
✅ Auto-resizing textarea input
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### 📌 Advanced Messaging
```
✅ Pin messages (multi-pin cycling bar)
✅ Emoji reactions ❤️ 😂 👍 😮 😢 🔥 🎉 👀
✅ Read receipts — ✓ sent → ✓✓ teal seen
✅ Seen timestamp shown on hover
✅ Copy message text to clipboard
✅ Date separators (Today / Yesterday / Mon)
✅ Scroll-to-bottom floating button
✅ Highlighted flash on jump-to-message
```

</td>
<td width="50%" valign="top">

#### 🎨 UI & Experience
```
✅ Custom dark design system (CSS variables)
✅ Instrument Serif + DM Sans typography
✅ Animated slide-in message bubbles
✅ 30-emoji picker in input toolbar
✅ Reaction picker on bubble hover
✅ Ping animation on online indicators
✅ Pop-in animation for unread badges
✅ Skeleton shimmer loaders
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

#### 👤 Profiles & Contacts
```
✅ Cloudinary avatar (auto 400x400 crop)
✅ Bio editor (160 character limit)
✅ Stats: member since, words exchanged
✅ Debounced live search (300ms)
✅ Online-only filter toggle
✅ Contacts sorted by last message
✅ Smart timestamps (now/3m/Yesterday)
✅ Per-contact + global unread badge
```

</td>
<td width="50%" valign="top">

#### 🗂️ Right Sidebar — 3 Tabs
```
✅ Media — shared image grid gallery
✅ Pinned — list with inline unpin button
✅ Info — profile + conversation stats
✅ Click any image to open full-size
✅ Message count & image count display
✅ Online/offline status with glow ring
```

</td>
</tr>
</table>

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        BROWSER CLIENT                           │
│                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌─────────────────────┐  │
│   │  AuthContext │  │  ChatContext │  │  React Components   │  │
│   │  ─────────── │  │  ─────────── │  │  ─────────────────  │  │
│   │  authUser    │  │  messages    │  │  Sidebar            │  │
│   │  login()     │  │  onlineUsers │  │  ChatContainer      │  │
│   │  logout()    │  │  typingUsers │  │  RightSidebar       │  │
│   │  updateProf  │  │  replyingTo  │  │  MessageBubble      │  │
│   └──────┬───────┘  └──────┬───────┘  └─────────────────────┘  │
│          │                 │                                     │
│     Axios (REST)      Socket.io (WS)                            │
└──────────┼─────────────────┼─────────────────────────────────────┘
           │                 │
           ▼                 ▼
┌─────────────────────────────────────────────────────────────────┐
│                      NODE.JS SERVER                             │
│                                                                 │
│  ┌──────────────┐  ┌──────────────────┐  ┌──────────────────┐  │
│  │  Express API │  │   Socket.io      │  │   Middleware     │  │
│  │  ──────────  │  │   ────────────── │  │   ──────────     │  │
│  │  /api/auth   │  │   typing events  │  │   protectRoute   │  │
│  │  /api/msgs   │  │   seen events    │  │   JWT verify     │  │
│  └──────┬───────┘  │   react events   │  │   cors / helmet  │  │
│         │          └──────────────────┘  └──────────────────┘  │
│         ▼                                                       │
│  ┌─────────────────────┐  ┌──────────────────────────────────┐  │
│  │  Controllers        │  │  Models (Mongoose)               │  │
│  │  msgController.js   │  │  User.js                         │  │
│  │  userController.js  │  │  Message.js + compound index     │  │
│  └──────────┬──────────┘  └──────────────────────────────────┘  │
└─────────────┼───────────────────────────────────────────────────┘
              │
     ┌────────┴──────────┐
     ▼                    ▼
┌──────────┐       ┌────────────┐
│ MongoDB  │       │ Cloudinary │
│ Atlas    │       │  CDN       │
│ users    │       │ avatars/   │
│ messages │       │ messages/  │
└──────────┘       └────────────┘
```

### Message Send Flow

```
User types → emitTyping() ──────────► Server ──► receiverSocket("userTyping")
                                                         │
User hits Enter                                          ▼
 → POST /api/messages/send/:id               Receiver sees "typing…"
         │
         ▼
   Save to MongoDB
         │
         ├──► Return { _id, text, ... } to sender (optimistic UI)
         │
         └──► receiverSocket.emit("newMessage", message)
                         │
                         ▼
               Receiver renders bubble
                         │
                         ▼
               emit("messageSeen") ──► Server
                                           │
                                           ▼
                                senderSocket("messageSeenAck")
                                           │
                                           ▼
                                  ✓ grey → ✓✓ teal
```

---

## 🛠️ Tech Stack

### Frontend

| Technology | Version | Role | Why |
|:---|:---:|:---|:---|
| [React](https://reactjs.org/) | 18.x | UI framework | Concurrent features, ecosystem |
| [Vite](https://vitejs.dev/) | 5.x | Build tool | 10–100× faster HMR vs CRA |
| [React Router](https://reactrouter.com/) | 6.x | Routing | Declarative, nested routes |
| [Axios](https://axios-http.com/) | 1.x | HTTP client | Interceptors for auto 401 |
| [Socket.io Client](https://socket.io/) | 4.x | WebSockets | Auto-reconnect, fallback |
| [React Hot Toast](https://react-hot-toast.com/) | 2.x | Notifications | Lightweight, customizable |
| Context API | built-in | State | No Redux boilerplate needed |
| CSS Variables | built-in | Design tokens | Runtime theming, zero cost |

### Backend

| Technology | Version | Role | Why |
|:---|:---:|:---|:---|
| [Node.js](https://nodejs.org/) | 18.x | Runtime | Non-blocking I/O, native ESM |
| [Express](https://expressjs.com/) | 4.x | API framework | Minimal, battle-tested |
| [MongoDB](https://mongodb.com/) | 7.x | Database | Flexible schema, scaling |
| [Mongoose](https://mongoosejs.com/) | 8.x | ODM | Validation, virtuals, populate |
| [Socket.io](https://socket.io/) | 4.x | WebSockets | Rooms, namespaces, shared |
| [bcryptjs](https://github.com/dcodeIO/bcrypt.js) | 2.x | Password hash | PBKDF, cost-factor adaptive |
| [jsonwebtoken](https://jwt.io/) | 9.x | Auth tokens | Stateless, signed, expiry |
| [Cloudinary](https://cloudinary.com/) | 1.x | Image CDN | Transforms, free tier |
| [cookie-parser](https://github.com/expressjs/cookie-parser) | 1.x | Cookies | httpOnly / SameSite support |

---

## 📂 Project Structure

```
ChatApp/
│
├── 📁 client/                          # React + Vite frontend
│   ├── public/
│   │   └── sounds/message.mp3          # Notification sound (background tabs)
│   │
│   └── src/
│       ├── 📁 context/
│       │   ├── AuthContext.jsx         # Auth state + Axios + 401 interceptor
│       │   └── ChatContext.jsx         # Messages, socket, typing, reactions, pin
│       │
│       ├── 📁 components/
│       │   ├── Sidebar.jsx             # Contacts, search, badges, typing preview
│       │   ├── ChatContainer.jsx       # Message area, emoji picker, edit/reply
│       │   └── RightSidebar.jsx        # 3-tab panel: Media / Pinned / Info
│       │
│       ├── 📁 pages/
│       │   ├── HomePage.jsx            # Three-column layout orchestrator
│       │   ├── LoginPage.jsx           # Login + Signup with validation
│       │   └── ProfilePage.jsx         # Avatar, bio, change password
│       │
│       ├── App.jsx                     # Router + ProtectedRoute + PublicRoute
│       ├── main.jsx                    # ReactDOM entry point
│       └── index.css                   # Design tokens, animations, responsive
│
├── 📁 server/                          # Node.js + Express backend
│   ├── 📁 controllers/
│   │   ├── messageController.js        # send, edit, seen, react, pin, delete
│   │   └── userController.js           # signup, login, logout, profile, search
│   │
│   ├── 📁 models/
│   │   ├── Message.js                  # Full lifecycle + compound index
│   │   └── User.js                     # Profile + lastSeen + bio
│   │
│   ├── 📁 routes/
│   │   ├── messageRoutes.js            # 9 message endpoints
│   │   └── userRoutes.js               # 7 auth endpoints
│   │
│   ├── 📁 middleware/
│   │   └── auth.js                     # JWT verify → req.user
│   │
│   ├── 📁 lib/
│   │   ├── db.js                       # Mongoose connect
│   │   ├── cloudinary.js               # Cloudinary v2 config
│   │   └── utils.js                    # generateToken helper
│   │
│   ├── server.js                       # Express + Socket.io + online users Map
│   ├── .env.example                    # Template env file
│   └── package.json
│
├── 📁 screenshots/                     # UI screenshots for this README
├── .gitignore
├── LICENSE
└── README.md
```

---

## ⚡ Quick Start

### Prerequisites

| Requirement | Min Version | Check | Install |
|:---|:---:|:---|:---|
| Node.js | 18.x | `node --version` | [nodejs.org](https://nodejs.org/) |
| npm | 9.x | `npm --version` | Bundled with Node.js |
| MongoDB | 6.x | `mongod --version` | [mongodb.com](https://mongodb.com/) |
| Git | any | `git --version` | [git-scm.com](https://git-scm.com/) |

> ☁️ Optional: [Cloudinary account](https://cloudinary.com/) (image uploads) · [MongoDB Atlas](https://cloud.mongodb.com/) (cloud database)

---


### Running the App

**Terminal 1 — Backend**
```bash
cd server && npm run dev
# ✅ MongoDB Connected: localhost
# 🚀 Server running on port 5000
```

**Terminal 2 — Frontend**
```bash
cd client && npm run dev
# ➜  Local:   http://localhost:5173
```

Open **[http://localhost:5173](http://localhost:5173)**, create an account, open an incognito window to test real-time between two users! 🎉

---

## 📡 API Reference

> **Base URL:** `http://localhost:5000/api`  
> **Auth:** `🔒` routes require a valid `jwt` httpOnly cookie (set automatically on login).  
> **Errors:** All errors return `{ "message": "string" }` with the appropriate HTTP status code.

### 🔐 Auth Routes — `/api/auth`

<details>
<summary><code>POST</code> &nbsp;<b>/signup</b> — Register new user</summary>
<br/>

**Request body:**
```json
{
  "fullName": "Riya Bansal",
  "email": "riya@example.com",
  "password": "securepassword123"
}
```
**Response `201`:**
```json
{
  "_id": "64f1a2b3c4d5e6f7a8b9c0d1",
  "fullName": "Riya Bansal",
  "email": "riya@example.com",
  "profilePic": "",
  "bio": ""
}
```
Sets `jwt` cookie. Password is never returned.
</details>

<details>
<summary><code>POST</code> &nbsp;<b>/login</b> — Login and set session</summary>
<br/>

**Request body:**
```json
{ "email": "riya@example.com", "password": "securepassword123" }
```
**Response `200`:** User object + sets `jwt` httpOnly cookie (7 days).
</details>

<details>
<summary><code>POST</code> &nbsp;<b>/logout</b> 🔒 — Clear session</summary>
<br/>

Clears the `jwt` cookie and updates `lastSeen` timestamp.

**Response `200`:** `{ "message": "Logged out successfully" }`
</details>

<details>
<summary><code>GET</code> &nbsp;<b>/me</b> 🔒 — Get current user</summary>
<br/>

**Response `200`:** Full user object (no password field).
</details>

<details>
<summary><code>PUT</code> &nbsp;<b>/update-profile</b> 🔒 — Update profile</summary>
<br/>

**Request body (all fields optional):**
```json
{
  "fullName": "Riya B",
  "bio": "Full-stack developer 👩‍💻",
  "profilePic": "data:image/jpeg;base64,/9j/4AAQ..."
}
```
`profilePic` is a base64 data URL — automatically uploaded to Cloudinary and cropped to 400×400.

**Response `200`:** Updated user object.
</details>

<details>
<summary><code>PUT</code> &nbsp;<b>/change-password</b> 🔒 — Change password</summary>
<br/>

```json
{
  "currentPassword": "oldpassword",
  "newPassword": "newpassword123"
}
```
Returns `400` if `currentPassword` doesn't match.
</details>

<details>
<summary><code>GET</code> &nbsp;<b>/search?q=riya</b> 🔒 — Search users</summary>
<br/>

Searches `fullName` and `email` fields (case-insensitive regex). Returns up to 10 users excluding yourself.
</details>

---

### 💬 Message Routes — `/api/messages`

| Method | Endpoint | Auth | Description | Body |
|:---:|:---|:---:|:---|:---|
| `GET` | `/users` | 🔒 | Sidebar contacts + unread counts + last message | — |
| `GET` | `/:userId` | 🔒 | Full conversation; marks incoming as seen | — |
| `GET` | `/:userId/pinned` | 🔒 | All pinned messages in this conversation | — |
| `POST` | `/send/:userId` | 🔒 | Send a message | `{ text?, image?, replyTo? }` |
| `PATCH` | `/:msgId/edit` | 🔒 | Edit own message | `{ text }` |
| `PATCH` | `/:msgId/seen` | 🔒 | Mark as seen | — |
| `PATCH` | `/:msgId/react` | 🔒 | Toggle emoji reaction | `{ emoji }` |
| `PATCH` | `/:msgId/pin` | 🔒 | Toggle pin on message | — |
| `DELETE` | `/:msgId` | 🔒 | Soft-delete for self only | — |

---

## 🔌 Socket.io Events

### Client → Server

| Event | Payload | Trigger |
|:---|:---|:---|
| `typing` | `{ to: string }` | User is typing |
| `stopTyping` | `{ to: string }` | Input idle ≥ 1.5s |
| `messageSeen` | `{ messageId: string, senderId: string }` | Incoming message renders |

### Server → Client

| Event | Payload | Cause |
|:---|:---|:---|
| `getOnlineUsers` | `string[]` | Any connect / disconnect |
| `newMessage` | `Message` | Successful `POST /send` |
| `userTyping` | `{ from: string }` | Received `typing` event |
| `userStopTyping` | `{ from: string }` | Received `stopTyping` event |
| `messageSeenAck` | `{ messageId: string }` | Received `messageSeen` event |
| `messageEdited` | `Message` | Successful `PATCH /edit` |
| `messageReacted` | `Message` | Successful `PATCH /react` |
| `messagePinned` | `Message` | Successful `PATCH /pin` |

### Socket Code Example

```javascript
// Auto-connected in ChatContext.jsx when user logs in
const socket = io("http://localhost:5000", {
  query: { userId: authUser._id }
});

// Receive a new message
socket.on("newMessage", (message) => {
  setMessages(prev => [...prev, message]);
});

// Emit typing
const handleTyping = () => {
  socket.emit("typing", { to: selectedUser._id });
  // Auto stop-typing emitted after 1.5s idle
};
```

---

## 🗄️ Database Schema

### `users` Collection

```js
{
  _id:        ObjectId,
  fullName:   String,     // required · min 2 · max 50
  email:      String,     // required · unique · lowercase · indexed
  password:   String,     // bcrypt hash cost=12 · NEVER returned in responses
  profilePic: String,     // Cloudinary secure URL · default ""
  bio:        String,     // max 160 chars · default ""
  lastSeen:   Date,       // updated on login + logout
  createdAt:  Date,       // auto (Mongoose timestamps)
  updatedAt:  Date        // auto (Mongoose timestamps)
}
```

### `messages` Collection

```js
{
  _id:        ObjectId,
  senderId:   ObjectId,   // ref: User · required
  receiverId: ObjectId,   // ref: User · required
  text:       String,     // trimmed · optional if image present
  image:      String,     // Cloudinary URL · optional
  replyTo:    ObjectId,   // ref: Message · self-ref for quotes · populated at query time
  isEdited:   Boolean,    // default false
  editedAt:   Date,       // set when text is edited
  seen:       Boolean,    // default false
  seenAt:     Date,       // set when receiver loads conversation
  reactions: [{
    userId:   ObjectId,   // ref: User
    emoji:    String      // one reaction per user; same emoji toggles off
  }],
  isPinned:   Boolean,    // default false
  deletedFor: [ObjectId], // soft-delete: hidden for each userId in this array
  createdAt:  Date,
  updatedAt:  Date
}

// Compound index on { senderId, receiverId, createdAt }
// Reduces conversation load from O(n) to O(log n)
```

### Relationships

```
User  ─────1:N─────►  Message (senderId)
User  ─────1:N─────►  Message (receiverId)
Message ───1:1─────►  Message (replyTo — self-reference)
User  ─────1:N─────►  Message.reactions[].userId
User  ─────M:N─────►  Message.deletedFor[]
```

---

## 🔒 Security

### Threat Model

| Threat | Mitigation | Code |
|:---|:---|:---|
| XSS | JWT in `httpOnly` cookie, inaccessible to JS | `res.cookie("jwt", token, { httpOnly: true })` |
| CSRF | `SameSite: strict` + CORS origin whitelist | `sameSite: "strict"` + `cors({ origin: CLIENT_URL })` |
| Password breach | bcrypt cost=12 (~300ms per hash) | `bcrypt.hash(password, 12)` |
| Session hijacking | 7-day JWT + expiry handling middleware | Returns 401 on `TokenExpiredError` |
| Brute force | Input validation + rate limiting (see below) | `password.length >= 6` |
| NoSQL injection | Mongoose parameterized queries | No raw query string construction |
| Data exposure | Password never in any response | `.select("-password")` on all user queries |
| Unauthorized access | `protectRoute` on all mutation routes | Applied to every PUT/POST/PATCH/DELETE |


Root Directory:  server
Build Command:   npm install
Start Command:   npm start
```

4. Add environment variables from your `.env`
5. Set `CLIENT_URL` to your future Vercel URL

#### Step 2 — Deploy Frontend to Vercel

1. [vercel.com](https://vercel.com) → **New Project** → import repo
2. Set **Root Directory**: `client`
3. Add environment variables:

```
VITE_API_URL    = https://your-app.onrender.com/api
VITE_SOCKET_URL = https://your-app.onrender.com
```

4. Deploy — Vercel auto-detects Vite ✨

#### Step 3 — MongoDB Atlas

1. [cloud.mongodb.com](https://cloud.mongodb.com/) → free M0 cluster
2. **Database Access** → add user with readWrite
3. **Network Access** → allow `0.0.0.0/0`
4. **Connect** → copy connection string → paste into Render's `MONGO_URI`

---

### Option B — Docker Compose (Self-Hosted)

```yaml
# docker-compose.yml
version: '3.8'
services:
  mongo:
    image: mongo:7
    volumes:
      - mongo_data:/data/db
    restart: unless-stopped

  server:
    build: ./server
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/chatapp
      - JWT_SECRET=${JWT_SECRET}
      - CLIENT_URL=http://localhost:5173
    depends_on: [mongo]
    restart: unless-stopped

  client:
    build: ./client
    ports:
      - "5173:80"
    depends_on: [server]
    restart: unless-stopped

volumes:
  mongo_data:
```

```bash
docker-compose up -d
docker-compose logs -f server
```

---

## 🔧 Troubleshooting

<details>
<summary><b>❌ MongoNetworkError — ECONNREFUSED 127.0.0.1:27017</b></summary>

MongoDB is not running locally.

```bash
# macOS (Homebrew)
brew services start mongodb/brew/mongodb-community

# Linux (systemd)
sudo systemctl start mongod

# Or use MongoDB Atlas — update MONGO_URI in .env
```
</details>

<details>
<summary><b>❌ CORS error — No 'Access-Control-Allow-Origin' header</b></summary>

`CLIENT_URL` in `.env` doesn't match the frontend URL exactly.

```env
# Correct — no trailing slash
CLIENT_URL=http://localhost:5173

# Wrong
CLIENT_URL=http://localhost:5173/
```

Restart the server after changing `.env`.
</details>

<details>
<summary><b>❌ Socket.io not connecting — messages only appear on refresh</b></summary>

1. Check `VITE_SOCKET_URL` is set (create `client/.env` if missing)
2. Verify backend CORS allows your origin
3. Open DevTools → Network → **WS** tab to see if the connection exists
4. In production: ensure your host supports WebSocket upgrades (Render ✅, some shared hosts ❌)
</details>

<details>
<summary><b>❌ Image upload fails — Cloudinary error</b></summary>

1. Double-check all 3 Cloudinary env vars (no trailing spaces)
2. The default `express.json({ limit: "10mb" })` rejects files larger than 10MB
3. Check Cloudinary dashboard → Usage to verify you're within the free tier limits (25GB bandwidth/month)
</details>

<details>
<summary><b>❌ Protected routes return 401 after login</b></summary>

Cookie isn't being sent. Check:

```javascript
// AuthContext.jsx — Axios must have credentials
const API = axios.create({
  baseURL: "...",
  withCredentials: true  // Must be true!
});

// server.js — CORS must allow credentials
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true  // Must be true!
}));
```

In production: frontend and backend must share a domain, or use a proxy config.
</details>

<details>
<summary><b>❌ "vite: command not found" or blank page on npm run dev</b></summary>

```bash
cd client
rm -rf node_modules package-lock.json
npm install
npm run dev
```
</details>

---

## 📈 Changelog

All notable changes are documented here. Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### [3.0.0] — Latest 🎉

#### Added
- 💬 Message reply/quote with jump-to-original click
- ✏️ Edit own messages — synced live via Socket.io
- 📌 Pin messages — cycling bar + right sidebar tab
- 😊 30-emoji picker in input toolbar
- 📅 Date separators between message groups
- ⬇️ Scroll-to-bottom floating button
- 🖼️ Full-screen image lightbox modal
- 🗂️ Right sidebar 3-tab panel (Media / Pinned / Info)
- 💬 Typing preview per-contact in sidebar list
- 🔢 Global unread badge in sidebar header
- ⏱️ Smart relative timestamps (now / 3m / Yesterday)
- 📋 Copy message text to clipboard
- 🔔 Background tab notification sound

#### Changed
- Textarea auto-resizes up to 120px height
- Message animations use staggered `animation-delay`
- Online status dots have ping ripple animation
- Unread badges use pop-in animation

#### Fixed
- Scroll jump when loading older messages
- Reaction picker staying open after selection

---

### [2.0.0]

#### Added
- ✓✓ Read receipts with seen timestamp tooltip
- 😍 Emoji reactions (8 types, per-user toggle)
- 🗑️ Soft-delete messages (per-user)
- 👤 Bio field + change password flow
- 🔍 User search endpoint + debounced UI
- 🖼️ Shared media gallery in right sidebar
- 🔔 Per-contact + global unread counter
- ⏳ Skeleton shimmer loaders
- 🎨 Full dark theme design system

---

### [1.0.0]

#### Added
- Basic real-time messaging with Socket.io
- JWT auth (signup / login / logout)
- Online / offline status
- Profile picture upload via Cloudinary

---

## 🔮 Roadmap

### Near-term — v3.x
- [ ] 🏠 **Group chats** — room-based Socket.io, participant management
- [ ] 🔍 **Message search** — MongoDB text index + search UI
- [ ] 📤 **Message forwarding** — forward to any contact
- [ ] 🌐 **Message translation** — inline translation via API
- [ ] ↩️ **Undo send** — 5-second retract window

### Medium-term — v4.x
- [ ] 🎤 **Voice messages** — record + Cloudinary raw upload
- [ ] 📁 **File sharing** — PDF, docx, zip support
- [ ] 📲 **Push notifications (PWA)** — service worker + Web Push
- [ ] 🌙 **Light / dark theme toggle**
- [ ] 🧵 **Message threads** — nested reply chains

### Long-term — v5.x
- [ ] 🔐 **End-to-end encryption** — Signal protocol
- [ ] 📞 **Video / voice calling** — WebRTC
- [ ] 🤖 **AI assistant** — integrated chatbot
- [ ] 📊 **Analytics dashboard** — usage statistics

---

## 🤝 Contributing

Contributions make open source amazing — all contributions are **greatly appreciated**!



## 📄 License

Distributed under the **MIT License** — see [`LICENSE`](LICENSE) for full text.

```
MIT License — Copyright (c) 2024 Riya Bansal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.
```

---

<!-- FOOTER -->
<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=100&section=footer" width="100%"/>

<br/>

**Built with ❤️ by [Riya Bansal](https://github.com/Riyaban583)**

<br/>

[![GitHub Follow](https://img.shields.io/github/followers/Riyaban583?label=Follow%20%40Riyaban583&style=social)](https://github.com/Riyaban583)
&nbsp;&nbsp;
[![Star this repo](https://img.shields.io/github/stars/Riyaban583/ChatApp?style=social)](https://github.com/Riyaban583/ChatApp)

<br/>

*If ChatApp helped you learn or build something — a ⭐ star genuinely means a lot!*

<br/>

`React` · `Node.js` · `MongoDB` · `Socket.io` · `Express` · `JWT` · `Cloudinary` · `Vite`

</div>
