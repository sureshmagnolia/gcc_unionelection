import prisma from './_db.js';
import { syncToGoogleSheets } from './_sheetsSync.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { id, reason } = req.body;
    if (!id) {
      return res.status(400).json({ error: 'Nomination ID is required' });
    }

    const nomination = await prisma.nomination.findUnique({
      where: { id: String(id) }
    });

    if (!nomination) {
      return res.status(404).json({ error: 'Nomination not found' });
    }

    const updated = await prisma.nomination.update({
      where: { id: String(id) },
      data: {
        withdrawalStatus: 'Requested',
        remarks: reason || nomination.remarks
      }
    });

    // Secondary backup sync to Google Sheets
    syncToGoogleSheets({
      action: 'withdrawNomination',
      id: String(id),
      reason
    });

    return res.status(200).json({
      success: true,
      message: 'Withdrawal request submitted successfully',
      nomination: updated
    });
  } catch (err) {
    console.error('[API Withdraw Error]', err);
    return res.status(500).json({ error: 'Failed to process withdrawal request' });
  }
}
