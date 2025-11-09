import express from 'express';
import * as whatsappController from '../controllers/x.js';

const router = express.Router();

// POST /api/sendWhatsApp
router.post('/sendWhatsApp', whatsappController.sendWhatsAppMessage);

export default router;
