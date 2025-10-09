import express from "express";

import { CreateUser } from "../controllers/userControllers/userControllers.js";

const Router = express.Router();

// verify Token

import { verifyToken, authorizeRoles } from "../auth/AuthVerifiy.js";

//  Public Route

Router.post("/login");
Router.post("/create-user", CreateUser);
Router.get("/public", (req, res) => {
  return res.status(200).json({ mesg: "Public Route" });
});

// Login USER Route

// customer.post("/login", loginUser)

// /// Forgot Password

// customer.post("/reset-password", forgotePassword)

// customer.post("/reset-password/email" , forgoteSavePassword)

// User Profile

// Router.get(
//   "/profile",
//   verifyToken,
//   authorizeRoles("customer"),
//   (request, response) => {
//     response.status(200).json({ mesg: "User Profile" });
//   }
// );

// logout controllers

// Router.get("/logout", (req, res) => {
//   // Iterate through all cookies and clear them
//   const cookies = req.cookies;
//   for (const cookieName in cookies) {
//     res.clearCookie(cookieName);
//   }

//   return res.json({ message: "All cookies cleared" });
// });

export default Router;
