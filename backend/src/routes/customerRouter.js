import express from 'express';

import {
  createUser,
  loginUser,
  forgoteSavePassword,
} from '../controllers/userControllers/userControllers';

const customer = express.Router();

export default customer;
