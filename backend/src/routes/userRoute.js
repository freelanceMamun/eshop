import express from 'express';

const userRoute = express.Router();
// --- Controllers
import {
  createUser,
  dashboardControllers,
  loginUser,
  adminControllers,
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

// dashboard route in admin

userRoute.post(
  '/dashboard',
  verifyToken,
  authorizeRoles('customer'),
  dashboardControllers
);

// User Dashboard GET
userRoute.get(
  '/dashboard',
  verifyToken,
  authorizeRoles('customer'),
  (req, response) => {
    return response.json({ message: 'welcome to get dashboard' });
  }
);



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
