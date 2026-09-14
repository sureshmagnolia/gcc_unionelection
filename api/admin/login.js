import { generateToken } from '../_auth.js';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'gvc123';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'Invalid admin password' });
  }

  const token = generateToken({ role: 'admin', loginTime: Date.now() });

  return res.status(200).json({
    success: true,
    token,
    message: 'Admin authentication successful'
  });
}
