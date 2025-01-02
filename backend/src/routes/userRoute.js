import express from 'express';
const userRoute = express.Router();
import {
  adminControllers,
  createUser,
  loginUser,
} from '../controllers/userControllers/userControllers.js';
import { verifyToken } from '../auth/AuthVerifiy.js';
// create user;
userRoute.post('/create-user', createUser);

// login user
userRoute.post('/login', loginUser);

// dashboard route in admin

userRoute.post('/shop-admin', verifyToken, adminControllers);

export default userRoute;

// Create an User
