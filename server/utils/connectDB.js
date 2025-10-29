// db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

export default async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connection Successfully...");
  } catch (err) {
    console.error("❌ Database Connection Failed...", err);
    process.exit(1); // Stop server if DB connection fails
  }
}
