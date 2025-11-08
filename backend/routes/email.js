import express from 'express';
import * as emailController from '../controllers/email.controller.js';

const router = express.Router();

router.get('/', emailController.testEmailAPI);
router.post('/sendEmail', emailController.sendEmail);

export default router;
