# 💬 ChatApp v2.0 — Enhanced Real-Time Chat

A full-stack real-time chat application with a polished dark UI, built with React, Node.js, Express, MongoDB, and Socket.io.

## ✨ What's New in v2.0

### Backend Enhancements
- ✅ **Typing indicators** — real-time "typing..." events via Socket.io
- ✅ **Message seen/read receipts** — ✓✓ ticks with timestamp
- ✅ **Emoji reactions** — react to any message; toggle & update in real time
- ✅ **Soft delete messages** — delete for yourself without removing for others
- ✅ **Unread message count** — per-user badge counts from the server
- ✅ **Last seen timestamp** — updated on login/logout
- ✅ **Bio field** on User model (160 chars)
- ✅ **Change password** endpoint with bcrypt verification
- ✅ **Search users** endpoint (`GET /api/auth/search?q=`)
- ✅ **Better error handling** — consistent error messages, JWT expiry detection
- ✅ **Input validation** — length limits, email checks, field requirements

### Frontend Enhancements
- ✅ **Dark theme design system** — CSS variables, custom fonts (Instrument Serif + DM Sans)
- ✅ **Animated message bubbles** — slide-in from left/right
- ✅ **Reaction picker** — hover any message to emoji-react
- ✅ **Typing bubble** — animated 3-dot indicator
- ✅ **Seen receipt ticks** — grey ✓ (sent) → teal ✓✓ (seen)
- ✅ **Image previews** — before sending, with remove button
- ✅ **Unread badges** — per-contact in sidebar
- ✅ **Last message preview** — time + text snippet in sidebar
- ✅ **Online filter** toggle in sidebar
- ✅ **Skeleton loading** — shimmer placeholders while messages load
- ✅ **Shared media grid** in right sidebar
- ✅ **Profile page** — avatar upload, bio, change password
- ✅ **Auth guard routes** — protected + public routes
- ✅ **Toast notifications** — themed to match dark UI
- ✅ **Debounced search** — 300ms delay on user search

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6 |
| State | Context API (AuthContext, ChatContext) |
| Realtime | Socket.io client |
| HTTP | Axios with interceptors |
| Notifications | react-hot-toast |
| Backend | Node.js, Express.js |
| Database | MongoDB + Mongoose |
| Auth | JWT (httpOnly cookies) |
| Realtime | Socket.io server |
| Storage | Cloudinary |

## 📂 Project Structure

```
ChatApp/
├── client/
│   └── src/
│       ├── context/
│       │   ├── AuthContext.jsx   # Auth state, API instance, interceptors
│       │   └── ChatContext.jsx   # Messages, socket, typing, reactions
│       ├── components/
│       │   ├── Sidebar.jsx       # Contact list, search, unread badges
│       │   ├── ChatContainer.jsx # Message area, reactions, typing, seen
│       │   └── RightSidebar.jsx  # User profile panel, shared media
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── LoginPage.jsx     # Login + Signup combined
│       │   └── ProfilePage.jsx   # Avatar, bio, password change
│       ├── App.jsx               # Router with protected routes
│       ├── main.jsx
│       └── index.css             # Design system, animations
│
└── server/
    ├── controllers/
    │   ├── messageController.js  # CRUD + seen + reactions + delete
    │   └── userController.js     # Auth + profile + search + password
    ├── models/
    │   ├── Message.js            # seen, seenAt, reactions, deletedFor
    │   └── User.js               # bio, lastSeen
    ├── routes/
    │   ├── messageRoutes.js
    │   └── userRoutes.js
    ├── middleware/auth.js
    ├── lib/
    │   ├── db.js
    │   ├── cloudinary.js
    │   └── utils.js
    └── server.js                 # Socket.io with typing + seen events
```

## ⚙️ Setup

### 1. Clone & Install

```bash
git clone https://github.com/Riyaban583/ChatApp.git
cd ChatApp

# Install server deps
cd server && npm install

# Install client deps
cd ../client && npm install
```

### 2. Configure Environment

Copy `server/.env.example` to `server/.env` and fill in your values:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_long_random_secret
CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
CLIENT_URL=http://localhost:5173
```

### 3. Run

```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

Open http://localhost:5173

## 🔮 Future Improvements
- [ ] Group chats
- [ ] File sharing (PDF, docs)
- [ ] Voice messages
- [ ] Message forwarding
- [ ] Push notifications
- [ ] End-to-end encryption
- [ ] Voice / video calling

---

**Author:** Riya Bansal — [GitHub](https://github.com/Riyaban583)
