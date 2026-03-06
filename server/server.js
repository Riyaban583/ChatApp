import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

// ---------------- SOCKET SERVER ----------------
export const io = new Server(server, {
  cors: { origin: "*" }
});

// store online users
export const userSocketMap = {};

io.on("connection", (socket) => {

  const userId = socket.handshake.query.userId;
  console.log("User Connected:", userId);

  if (userId) userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User Disconnected:", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

});

// ---------------- MIDDLEWARE ----------------
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

// ---------------- ROUTES ----------------
app.get("/api/status", (req, res) => {
  res.send("Server is live");
});

// FIXED ROUTES
app.use("/api/users", userRouter);
app.use("/api/messages", messageRouter);

// ---------------- DATABASE ----------------
connectDB();

const PORT = process.env.PORT || 5000;

// ---------------- SERVER START ----------------
server.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
});