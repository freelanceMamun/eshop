import express from 'express';
const userRoute = express.Router();
import {
  createUser,
  dashboardControllers,
  loginUser,
} from '../controllers/userControllers/userControllers.js';
import {
  verifyToken,
  authorizeRoles,
  verifyAdminToken,
} from '../auth/AuthVerifiy.js';
// create user;
userRoute.post('/create-user', createUser);

// login user
userRoute.post('/login', loginUser);

// dashboard route in admin

userRoute.post('/dashboard', verifyToken, dashboardControllers);

// Protected route (Admin only)
userRoute.get('/admin', (req, res) => {
  return res.json({ message: 'Welcome, Admin!' });
});

export default userRoute;

// Create an User
