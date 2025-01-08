import mongoose, { Schema } from 'mongoose';

const productScheama = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
