import express from 'express';
const userRoute = express.Router();

// create user;
userRoute.post('/create-user', (request, response) => {



    
  return response.status(200).json({ message: 'user create' });
});

// login user
userRoute.post('/login', (request, response) => {});

export default userRoute;

// Create an User
