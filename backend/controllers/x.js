import dotenv from 'dotenv';

dotenv.config();

const botId = process.env.WHATSAPP_BOT_ID || '895817553606475';
const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER || '527771395795';
const bearerToken = process.env.WHATSAPP_BEARER_TOKEN || '';
const whatsappApiUrl = `https://graph.facebook.com/v17.0/${botId}/messages`;

export async function sendWhatsAppMessage(req, res) {
  const { name, email, phone, subject, message } = req.body;

  // Basic validation
  if (!name || !message) {
    return res.status(400).json({ message: 'Name and message are required fields.' });
  }

  // Build message body. Use markdown-like formatting for readability in WhatsApp.
  const whatsappMessage = `*Subject*: ${subject || 'New Contact from Portfolio'}\n\nHello, Elviro.\n\nMy name is ${name}.${email ? `\nEmail: ${email}` : ''}${phone ? `\nPhone: ${phone}` : ''}\n\n${message}`;

  const payload = {
    messaging_product: 'whatsapp',
    to: phoneNumber,
    type: 'text',
    text: {
      body: whatsappMessage
    }
  };

  try {
    const response = await fetch(whatsappApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('WhatsApp API error:', errorData || response.statusText);
      return res.status(502).json({ message: 'Failed to send WhatsApp message', details: errorData || response.statusText });
    }

    const responseData = await response.json();
    return res.status(200).json({ message: 'WhatsApp message sent successfully', data: responseData });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
}

/* try {
    const response = await fetch(whatsappApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      return res.status(response.status).json({ message: "Failed to send WhatsApp message", error: errorData });
    }

    return res.status(200).json({ message: "WhatsApp message sent successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  } */
