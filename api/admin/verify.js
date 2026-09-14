import prisma from '../_db.js';
import { verifyAdminToken } from '../_auth.js';
import { syncToGoogleSheets } from '../_sheetsSync.js';

export default async function handler(req, res) {
  if (!verifyAdminToken(req)) {
    return res.status(401).json({ error: 'Unauthorized admin access' });
  }

  if (req.method === 'GET') {
    try {
      const nominations = await prisma.nomination.findMany({
        include: {
          candidate: true,
          proposer: true,
          seconder: true
        },
        orderBy: { createdAt: 'desc' }
      });
      return res.status(200).json(nominations);
    } catch (err) {
      console.error('[API Admin Verify GET Error]', err);
      return res.status(500).json({ error: 'Failed to fetch nominations' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { id, status, remarks } = req.body;
      if (!id || !status) {
        return res.status(400).json({ error: 'ID and status are required' });
      }

      const updated = await prisma.nomination.update({
        where: { id: String(id) },
        data: {
          status,
          remarks: remarks !== undefined ? remarks : undefined
        }
      });

      // Secondary backup sync
      syncToGoogleSheets({
        action: 'verifyNomination',
        id: String(id),
        status,
        remarks
      });

      return res.status(200).json({
        success: true,
        nomination: updated
      });
    } catch (err) {
      console.error('[API Admin Verify POST Error]', err);
      return res.status(500).json({ error: 'Failed to update nomination scrutiny status' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
