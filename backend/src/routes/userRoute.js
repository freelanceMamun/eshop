import express from 'express';

const userRoute = express.Router();
// --- Controllers
import {
  createUser,
  loginUser,
  forgotePassword,
  forgoteSavePassword,
} from '../controllers/userControllers/userControllers.js';

// Token

import {
  verifyToken,
  authorizeRoles,
  verifyAdminToken,
} from '../auth/AuthVerifiy.js';

import { forgotPasswordMiddleware } from '../middleware/middlweare.js';

// create user;
userRoute.post('/create-user', createUser);

// login user
userRoute.post('/login', loginUser);

// Forgate Password user

userRoute.post('/reset-password', forgotPasswordMiddleware, forgotePassword);

userRoute.post('/reset-password/email', forgoteSavePassword);

// logout controllers

userRoute.get('/logout', (req, res) => {
  // Iterate through all cookies and clear them
  const cookies = req.cookies;
  for (const cookieName in cookies) {
    res.clearCookie(cookieName);
  }

  return res.json({ message: 'All cookies cleared' });
});

export default userRoute;

// Create an User
