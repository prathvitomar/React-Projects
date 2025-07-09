import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectToDatabase() {
  try {
    await mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => console.log(`Database connected successfully`));
  } catch (e) {
    throw new Error(`Error connecting to database: ${e.message}`);
  }
}
