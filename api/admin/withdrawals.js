import prisma from '../_db.js';
import { verifyAdminToken } from '../_auth.js';
import { syncToGoogleSheets } from '../_sheetsSync.js';

export default async function handler(req, res) {
  if (!verifyAdminToken(req)) {
    return res.status(401).json({ error: 'Unauthorized admin access' });
  }

  if (req.method === 'GET') {
    try {
      const withdrawals = await prisma.nomination.findMany({
        where: { withdrawalStatus: { in: ['Requested', 'Approved', 'Rejected'] } },
        include: { candidate: true },
        orderBy: { createdAt: 'desc' }
      });
      return res.status(200).json(withdrawals);
    } catch (err) {
      console.error('[API Admin Withdrawals GET Error]', err);
      return res.status(500).json({ error: 'Failed to fetch withdrawal requests' });
    }
  }

  if (req.method === 'POST') {
    try {
      const { id, withdrawalStatus } = req.body;
      if (!id || !withdrawalStatus) {
        return res.status(400).json({ error: 'ID and withdrawalStatus are required' });
      }

      const updated = await prisma.nomination.update({
        where: { id: String(id) },
        data: { withdrawalStatus }
      });

      syncToGoogleSheets({
        action: 'updateWithdrawalStatus',
        id: String(id),
        withdrawalStatus
      });

      return res.status(200).json({
        success: true,
        nomination: updated
      });
    } catch (err) {
      console.error('[API Admin Withdrawals POST Error]', err);
      return res.status(500).json({ error: 'Failed to update withdrawal status' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
