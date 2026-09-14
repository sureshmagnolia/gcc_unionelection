import prisma from '../_db.js';
import { verifyAdminToken } from '../_auth.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const settings = await prisma.setting.findMany();
      const map = {};
      settings.forEach(s => { map[s.key] = s.value; });
      return res.status(200).json(map);
    } catch (err) {
      console.error('[API Settings GET Error]', err);
      return res.status(500).json({ error: 'Failed to fetch settings' });
    }
  }

  if (req.method === 'POST') {
    if (!verifyAdminToken(req)) {
      return res.status(401).json({ error: 'Unauthorized admin access' });
    }

    try {
      const { settings } = req.body; // Map of key-value pairs
      if (!settings || typeof settings !== 'object') {
        return res.status(400).json({ error: 'Settings object is required' });
      }

      const updates = Object.entries(settings).map(([key, value]) =>
        prisma.setting.upsert({
          where: { key },
          update: { value: String(value) },
          create: { key, value: String(value) }
        })
      );

      await Promise.all(updates);
      return res.status(200).json({ success: true, message: 'Settings updated' });
    } catch (err) {
      console.error('[API Settings POST Error]', err);
      return res.status(500).json({ error: 'Failed to update settings' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
