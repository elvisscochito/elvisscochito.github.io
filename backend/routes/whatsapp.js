import express from 'express';
import * as whatsappController from '../controllers/whatsapp.controller.js';

const router = express.Router();

router.post('/postWhatsApp', whatsappController.postWhatsAppMessage);
/* router.post('/postWhatsAppMessage', whatsappController.postWhatsAppMessage); */
router.post('/postQuickNotification', whatsappController.postQuickNotification);

export default router;
