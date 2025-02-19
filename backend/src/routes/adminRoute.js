import express from 'express';
import { adminControllers } from '../controllers/userControllers/userControllers.js';

import { verifyAdminToken , authorizeRoles} from '../auth/AuthVerifiy';

const admin = express.Router();

admin.post('/admin', adminControllers);



export default admin;
