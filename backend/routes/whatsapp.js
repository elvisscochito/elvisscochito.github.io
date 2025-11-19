import express from 'express';
import * as whatsappController from '../controllers/whatsapp.controller.js';

const router = express.Router();

router.post('/postWhatsApp', whatsappController.postWhatsAppMessage);
router.post('/postWhatsAppQuickMessage', whatsappController.postWhatsAppQuickMessage);

export default router;
