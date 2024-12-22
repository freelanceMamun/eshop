import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    uuid: {
      type: String,
    },
  },
  { timestamps: true }
);

const USER = mongoose.model('user', userSchema);

export default USER;
