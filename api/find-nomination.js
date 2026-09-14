import prisma from './_db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ error: 'Nomination ID is required' });
  }

  try {
    const nomination = await prisma.nomination.findUnique({
      where: { id: String(id) },
      include: {
        candidate: true,
        proposer: true,
        seconder: true
      }
    });

    if (!nomination) {
      return res.status(404).json({ error: 'Nomination ID not found' });
    }

    return res.status(200).json({
      id: nomination.id,
      post: nomination.postName,
      status: nomination.status,
      withdrawalStatus: nomination.withdrawalStatus,
      remarks: nomination.remarks,
      createdAt: nomination.createdAt,
      candidate: nomination.candidate,
      proposer: nomination.proposer,
      seconder: nomination.seconder
    });
  } catch (err) {
    console.error('[API Find Nomination Error]', err);
    return res.status(500).json({ error: 'Failed to find nomination' });
  }
}
