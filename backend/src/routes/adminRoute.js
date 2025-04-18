import express from 'express';
import {adminControllers} from '../controllers/userControllers/adminControllers.js';

import { verifyAdminToken, authorizeRoles } from '../auth/AuthVerifiy.js';

const admin = express.Router();

admin.post('/admin', adminControllers);

admin.get(
  '/admin',
  verifyAdminToken,
  authorizeRoles('admin'),
  (request, response) => {
    return response.json({ message: 'welcome to admin' });
  }
);

export default admin;
