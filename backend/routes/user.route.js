import express from 'express';
import protectRoute from '../middleware/protect.route.js';
import { getUsersSidebar } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/',protectRoute ,getUsersSidebar);

export default router;