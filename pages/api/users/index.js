import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('users');

  if (req.method === 'GET') {
    const users = await collection.find({}).toArray();
    const mapped = users.map((u) => ({
      id: u._id.toString(),
      name: u.name,
      profilePicture: u.profilePicture,
    }));
    return res.status(200).json(mapped);
  }

  return res.status(405).end();
}
