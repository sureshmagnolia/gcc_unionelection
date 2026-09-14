import prisma from '../_db.js';
import { verifyAdminToken } from '../_auth.js';
import { syncToGoogleSheets } from '../_sheetsSync.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const results = await prisma.boothResult.findMany({
        include: {
          candidate: { include: { candidate: true } }
        }
      });
      return res.status(200).json(results);
    } catch (err) {
      console.error('[API Results GET Error]', err);
      return res.status(500).json({ error: 'Failed to fetch booth results' });
    }
  }

  if (req.method === 'POST') {
    if (!verifyAdminToken(req)) {
      return res.status(401).json({ error: 'Unauthorized admin access' });
    }

    try {
      const { postName, candidateId, boothId, voteCount } = req.body;
      if (!postName || !candidateId || !boothId || voteCount === undefined) {
        return res.status(400).json({ error: 'Missing required vote result fields' });
      }

      const upserted = await prisma.boothResult.upsert({
        where: {
          postName_candidateId_boothId: {
            postName,
            candidateId: String(candidateId),
            boothId: String(boothId)
          }
        },
        update: { voteCount: parseInt(voteCount, 10) },
        create: {
          postName,
          candidateId: String(candidateId),
          boothId: String(boothId),
          voteCount: parseInt(voteCount, 10)
        }
      });

      syncToGoogleSheets({
        action: 'saveBoothResult',
        postName,
        candidateId,
        boothId,
        voteCount
      });

      return res.status(200).json({ success: true, result: upserted });
    } catch (err) {
      console.error('[API Results POST Error]', err);
      return res.status(500).json({ error: 'Failed to save booth result' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
