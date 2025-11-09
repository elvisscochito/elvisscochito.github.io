import dotenv from 'dotenv';

dotenv.config();

const botId = process.env.WHATSAPP_BOT_ID || '895817553606475';
const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER || '527771395795';
const bearerToken = process.env.WHATSAPP_BEARER_TOKEN || 'EAAhJ35fPXFsBPzWbdQXtksf8nHVpMfF0J3gbtjKZCT59a5Tsv80LMnR2ukLyazgAeVuOyCZCUzec8Dy4ZBBnrlrrkP8Ghebo8w5lWuXpKqbrYyUS3eZBr9ScJRpzuigmdmjMdrZCUEVghC4TBH1SdbkLHUZAey3ZCB689aLSKUVZBQ9hfYZACSgbHkjaL37WSkimVnyqftI2pVBvVmOZBTzfbAd1wpeUp8Y86OnrKh6JPrHWWtxQFaC2FdZBsStRJWZAE6WhCTttJpZBTMoky7pEiILpdfJx4YzBSCLDaxwZDZD';
const whatsappApiURL = `https://graph.facebook.com/v22.0/${botId}/messages`;

export async function postWhatsAppMessage(req, res) {
  const { subject, name, email, phone, message } = req.body;

  /* QUICK and BASIC VALIDATION */
  if (!subject || !name || !phone || !message) {
    return res.status(400).json({ message: "Missing required fields: subject, name, phone or message; only email is optional" });
  }

  const whatsappMessage = `*Subject*: ${subject}\n\nHello, Elviro.\n\nMy name is *${name}*.\nEmail: ${email}\nPhone: ${phone}\n\n"${message}"`;

  const payload = {
    messaging_product: "whatsapp",
    to: phoneNumber,
    /* type: 'template',
    template: {
      name: "hello_world",
      language: {
        code: "en_US"
      }
    } */

    type: 'text',
    text: {
      body: whatsappMessage
      /* body: 'Hello, this is a test message from the WhatsApp Business API.' */
    }
  }

  try {
    const response = await fetch(whatsappApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    return res.status(200).json({ message: 'WhatsApp message sent successfully', data: data });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
}
