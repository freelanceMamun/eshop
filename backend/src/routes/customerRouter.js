import express from 'express';

import {
  createUser,
  loginUser,
  forgoteSavePassword,
} from '../controllers/userControllers/userControllers';

const customer = express.Router();

// Create USER Route
customer.post("/create-user", createUser)

// Login USER Route

customer.post("/login", loginUser)



export default customer;
