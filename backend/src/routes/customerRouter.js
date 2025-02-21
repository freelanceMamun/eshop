import express from 'express';

import {
  createUser,
  loginUser,
  forgoteSavePassword,
  forgotePassword
} from '../controllers/userControllers/userControllers';

const customer = express.Router();

// Create USER Route
customer.post("/create-user", createUser)

// Login USER Route

customer.post("/login", loginUser)

/// Forgot Password 

customer.post("/reset-password", forgotePassword)

customer.post("/reset-password/email" , forgoteSavePassword)





export default customer;
