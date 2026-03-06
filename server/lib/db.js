import mongoose from "mongoose";

export const connectDB = async () => {
  try {

    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      console.log("MongoDB URI not found in .env");
      process.exit(1);
    }

    await mongoose.connect(mongoURI);

    console.log("Database Connected Successfully");

  } catch (error) {

    console.log("MongoDB Connection Error:", error.message);
    process.exit(1);

  }
};