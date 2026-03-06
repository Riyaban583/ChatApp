import express from "express";
import { protectRoute } from "../middleware/auth.js";
import {
  getUsersForSidebar,
  getMessages,
  markMessageAsSeen,
  sendMessage
} from "../controllers/messageController.js";

const messageRouter = express.Router();

// get users for sidebar
messageRouter.get("/users", protectRoute, getUsersForSidebar);

// get messages between users
messageRouter.get("/:id", protectRoute, getMessages);

// send message
messageRouter.post("/send/:id", protectRoute, sendMessage);

// mark message as seen
messageRouter.put("/mark/:id", protectRoute, markMessageAsSeen);
messageRouter.post("/send/:id",protectRoute, sendMessage)

export default messageRouter;