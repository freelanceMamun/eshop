import express from 'express';
const userRoute = express.Router();
import { createUser } from '../controllers/userControllers/userControllers.js';
// create user;
userRoute.post('/create-user', (request, response) => {
  return response.status(200).json({ message: 'user create' });
});

// login user
userRoute.post('/login', createUser);


export default userRoute;

// Create an User
