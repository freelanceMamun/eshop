import express from 'express';

const userRoute = express.Router();

// Token

import {
  verifyToken,
  authorizeRoles,
  verifyAdminToken,
} from '../auth/AuthVerifiy.js';

import { forgotPasswordMiddleware } from '../middleware/middlweare.js';


export default userRoute;

// Create an User
