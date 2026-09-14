import prisma from './_db.js';
import { syncToGoogleSheets } from './_sheetsSync.js';

function generateUniqueId() {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { post, candidateSerial, proposerSerial, seconderSerial } = req.body;

    if (!post || !candidateSerial || !proposerSerial || !seconderSerial) {
      return res.status(400).json({ error: 'Missing required nomination fields' });
    }

    const cSerial = parseInt(candidateSerial, 10);
    const pSerial = parseInt(proposerSerial, 10);
    const sSerial = parseInt(seconderSerial, 10);

    // Verify candidate, proposer, seconder exist
    const [candidate, proposer, seconder] = await Promise.all([
      prisma.nominalRoll.findUnique({ where: { serialNo: cSerial } }),
      prisma.nominalRoll.findUnique({ where: { serialNo: pSerial } }),
      prisma.nominalRoll.findUnique({ where: { serialNo: sSerial } })
    ]);

    if (!candidate || !proposer || !seconder) {
      return res.status(404).json({ error: 'Invalid candidate, proposer, or seconder serial number' });
    }

    // Check duplicate nomination for the same candidate on the same post
    const existing = await prisma.nomination.findFirst({
      where: {
        postName: post,
        candidateSerial: cSerial
      }
    });

    if (existing) {
      return res.status(400).json({ error: 'Nomination already submitted for this candidate on this post' });
    }

    const id = generateUniqueId();

    const nomination = await prisma.nomination.create({
      data: {
        id,
        postName: post,
        candidateSerial: cSerial,
        proposerSerial: pSerial,
        seconderSerial: sSerial,
        status: 'Pending',
        withdrawalStatus: 'None'
      }
    });

    // Secondary background sync to Google Sheets
    syncToGoogleSheets({
      action: 'submitNomination',
      nomination: {
        id,
        post,
        candidateSerial: cSerial,
        proposerSerial: pSerial,
        seconderSerial: sSerial,
        status: 'Pending',
        timestamp: new Date().toISOString()
      }
    });

    return res.status(200).json({
      success: true,
      id: nomination.id,
      message: 'Nomination submitted successfully'
    });
  } catch (err) {
    console.error('[API Submit Nomination Error]', err);
    return res.status(500).json({ error: 'Failed to save nomination' });
  }
}
