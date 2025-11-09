const botId = process.env.WHATSAPP_BOT_ID || '895817553606475';
const phoneNumber = process.env.WHATSAPP_PHONE_NUMBER || '527771395795';
const bearerToken = process.env.WHATSAPP_BEARER_TOKEN || 'EAAhJ35fPXFsBPzWbdQXtksf8nHVpMfF0J3gbtjKZCT59a5Tsv80LMnR2ukLyazgAeVuOyCZCUzec8Dy4ZBBnrlrrkP8Ghebo8w5lWuXpKqbrYyUS3eZBr9ScJRpzuigmdmjMdrZCUEVghC4TBH1SdbkLHUZAey3ZCB689aLSKUVZBQ9hfYZACSgbHkjaL37WSkimVnyqftI2pVBvVmOZBTzfbAd1wpeUp8Y86OnrKh6JPrHWWtxQFaC2FdZBsStRJWZAE6WhCTttJpZBTMoky7pEiILpdfJx4YzBSCLDaxwZDZD';
const whatsappApiURL = `https://graph.facebook.com/v22.0/${botId}/messages`;

const data_ = {
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
    body: 'Hello, this is a test message from the WhatsApp Business API.'
  },
};

const post_ = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${bearerToken}`,
  },
  body: JSON.stringify(data_),
  json: true,
}

/* fetch(whatsappApiURL, post_)
  .then(response => response.json())
  .then(data => {
    console.log('WhatsApp message sent successfully:', data);
    return data;
  })
  .catch(error => {
    console.error('Error sending WhatsApp message:', error);
    return error;
  }); */

/* const resp = await fetch(whatsappApiURL, post_);
if (!resp.ok) {
  const err = await resp.json();
  console.error('WhatsApp API error', err);
} else {
  const body = await resp.json();
  console.log('Sent OK', body);
} */

/* export async function sendWhatsAppMessage(req, res) {
  try {
    const response = await fetch(whatsappApiURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(data_),
      json: true,
    }) */
/* if (!response.ok) {
  const errorData = await response.json();
  console.error('WhatsApp API error:', errorData);
  return res.status(502).json({ message: 'Failed to send WhatsApp message', details: errorData });
} */

/* const data = await response.json();
return res.status(200).json({ message: 'WhatsApp message sent successfully', data: data });
} catch (error) {
console.error('Error sending WhatsApp message:', error);
return res.status(500).json({ message: 'Internal server error', details: error.message });
}
} */

/* export async function sendWhatsAppMessage(req, res) {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required fields.' });
  }

  const whatsappMessage = `*Subject*: ${subject || 'New Contact from Portfolio'}.%0A%0AHello, Elviro.%0A%0AMy name is ${name}.%0AEmail: ${email}%0A${phone ? `Phone: ${phone}%0A` : ''}%0A${message}`;

  const payload = {
    messaging_product: "whatsapp",
    to: phoneNumber,
    type: "text",
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
      const errorData = await response.json();
      console.error('WhatsApp API error:', errorData);
      return res.status(502).json({ message: 'Failed to send WhatsApp message', details: errorData });
    }

    const responseData = await response.json();
    return res.status(200).json({ message: 'WhatsApp message sent successfully', data: responseData });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ message: 'Internal server error', details: error.message });
  }
} */
