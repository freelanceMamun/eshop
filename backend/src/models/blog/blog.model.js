import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sortdescription: {
      type: String,
      required: true,
    },
    thumPicture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
