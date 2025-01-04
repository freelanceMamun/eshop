import express from 'express';
const userRoute = express.Router();
import {
  createUser,
  loginUser,
} from '../controllers/userControllers/userControllers.js';
import { verifyToken, authorizeRoles } from '../auth/AuthVerifiy.js';
// create user;
userRoute.post('/create-user', createUser);

// login user
userRoute.post('/login', loginUser);

// dashboard route in admin

// Protected route (Admin only)
userRoute.get('/admin', verifyToken, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

export default userRoute;

// Create an User
