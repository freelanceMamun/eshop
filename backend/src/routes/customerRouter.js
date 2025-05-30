import express from 'express';

import {
  createUser,
  loginUser,
  forgoteSavePassword,
  forgotePassword
} from '../controllers/userControllers/userControllers.js';


// verify Token
 
import { verifyToken, authorizeRoles } from '../auth/AuthVerifiy.js';

const customer = express.Router();

// Create USER Route
customer.post("/create-user", createUser)

// Login USER Route

customer.post("/login", loginUser)

/// Forgot Password 

customer.post("/reset-password", forgotePassword)

customer.post("/reset-password/email" , forgoteSavePassword)

// User Profile

customer.get("/profile", verifyToken, authorizeRoles("customer"), (request, response)=>{
   response.status(200).json({mesg : "User Profile"})
})

// logout controllers

customer.get('/logout', (req, res) => {
  // Iterate through all cookies and clear them
  const cookies = req.cookies;
  for (const cookieName in cookies) {
    res.clearCookie(cookieName);
  }

  return res.json({ message: 'All cookies cleared' });
});






export default customer;
