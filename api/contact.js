// api/contact.js (Vercel)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { subject, name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  try {
    // Reenvía a FormSubmit (server-side avoids CORS)
    const formUrl = process.env.FORMSUBMIT_URL; // e.g. https://formsubmit.co/your-email
    const params = new URLSearchParams();
    params.append('subject', subject || '');
    params.append('name', name);
    params.append('email', email);
    params.append('message', message);
    // opcionales: params.append('_captcha', 'false');

    const r = await fetch(formUrl, {
      method: 'POST',
      body: params
    });

    if (!r.ok) {
      // registra y falla
      console.error('FormSubmit error', r.status);
      return res.status(502).json({ error: 'Upstream error' });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
}
