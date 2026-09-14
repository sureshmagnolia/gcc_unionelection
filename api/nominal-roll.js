import prisma from './_db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { serial } = req.query;
  if (!serial) {
    return res.status(400).json({ error: 'Serial number is required' });
  }

  try {
    const student = await prisma.nominalRoll.findUnique({
      where: { serialNo: parseInt(serial, 10) }
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found in Nominal Roll' });
    }

    return res.status(200).json({
      serialNo: student.serialNo,
      name: student.name,
      className: student.className,
      admissionNo: student.admissionNo,
      dept: student.dept,
      gender: student.gender,
      dob: student.dob
    });
  } catch (err) {
    console.error('[API Nominal Roll Error]', err);
    return res.status(500).json({ error: 'Failed to query Nominal Roll' });
  }
}
