import prisma from '../_db.js';
import { verifyAdminToken } from '../_auth.js';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const posts = await prisma.post.findMany({ orderBy: { id: 'asc' } });
      return res.status(200).json(posts);
    } catch (err) {
      console.error('[API Posts GET Error]', err);
      return res.status(500).json({ error: 'Failed to fetch posts' });
    }
  }

  if (req.method === 'POST') {
    if (!verifyAdminToken(req)) {
      return res.status(401).json({ error: 'Unauthorized admin access' });
    }

    try {
      const { postName, femaleOnly, finalYearIneligible, yearRestriction, deptRestriction } = req.body;
      if (!postName) return res.status(400).json({ error: 'postName is required' });

      const post = await prisma.post.upsert({
        where: { postName },
        update: {
          femaleOnly: !!femaleOnly,
          finalYearIneligible: !!finalYearIneligible,
          yearRestriction: yearRestriction || null,
          deptRestriction: !!deptRestriction
        },
        create: {
          postName,
          femaleOnly: !!femaleOnly,
          finalYearIneligible: !!finalYearIneligible,
          yearRestriction: yearRestriction || null,
          deptRestriction: !!deptRestriction
        }
      });

      return res.status(200).json({ success: true, post });
    } catch (err) {
      console.error('[API Posts POST Error]', err);
      return res.status(500).json({ error: 'Failed to update post' });
    }
  }

  if (req.method === 'DELETE') {
    if (!verifyAdminToken(req)) {
      return res.status(401).json({ error: 'Unauthorized admin access' });
    }

    try {
      const { postName } = req.body;
      if (!postName) return res.status(400).json({ error: 'postName is required' });

      await prisma.post.delete({ where: { postName } });
      return res.status(200).json({ success: true, message: 'Post deleted' });
    } catch (err) {
      console.error('[API Posts DELETE Error]', err);
      return res.status(500).json({ error: 'Failed to delete post' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
