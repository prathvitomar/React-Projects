import mongoose, { Schema } from "mongoose";

// title, description, price, imageLink

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      length: { min: 5, max: 30 },
    },
    description: {
      type: String,
      required: true,
      length: { max: 200 },
    },
    price: {
      type: Number,
      required: true,
    },
    imageLink: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Course = mongoose.model("Course", courseSchema);
