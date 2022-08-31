import { Schema } from "mongoose";

const ContentSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    memo: {
      type: String,
      required: true,
    },
  },
  {
    collection: "contents",
    timestamps: true,
  }
);

export { ContentSchema };
