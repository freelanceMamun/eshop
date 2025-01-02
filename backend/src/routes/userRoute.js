import express from 'express';
const userRoute = express.Router();
import {
  createUser,
  loginUser,
} from '../controllers/userControllers/userControllers.js';
// create user;
userRoute.post('/create-user', createUser);

// login user
userRoute.post('/login', loginUser);

export default userRoute;

// Create an User
