import { generateToken } from "../lib/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

// ================= SIGNUP =================
export const signup = async (req, res) => {
  try {
    const { fullName, email, password, bio } = req.body;

    if (!fullName || !email || !password || !bio) {
      return res.json({
        success: false,
        message: "Missing Details",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });

    if (existingUser) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email: normalizedEmail,
      password: hashedPassword,
      bio,
    });

    await newUser.save();

    const token = generateToken(newUser._id);

    res.json({
      success: true,
      token,
      userData: newUser,
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LOGIN =================
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        success: false,
        message: "Email and Password required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const userData = await User.findOne({ email: normalizedEmail });

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userData.password
    );

    if (!isPasswordCorrect) {
      return res.json({
        success: false,
        message: "Invalid Credentials",
      });
    }

    const token = generateToken(userData._id);

    res.json({
      success: true,
      token,
      userData,
      message: "Login Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// ================= CHECK AUTH =================
export const checkAuth = (req, res) => {
  res.json({
    success: true,
    userData: req.user,
  });
};

// ================= UPDATE PROFILE =================
export const updateProfile = async (req, res) => {
  try {
    const { profilePic, fullName, bio } = req.body;

    const userId = req.user._id;

    let updatedUser;

    if (!profilePic) {
      updatedUser = await User.findByIdAndUpdate(
        userId,
        { fullName, bio },
        { new: true }
      );
    } else {
      const upload = await cloudinary.uploader.upload(profilePic, {
        folder: "chat_app_profiles",
      });

      updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          profilePic: upload.secure_url,
          fullName,
          bio,
        },
        { new: true }
      );
    }

    res.json({
      success: true,
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};