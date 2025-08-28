import clientPromise from '../../../lib/mongodb';
import { users as defaultUsers } from '../../../lib/userDatabase';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('users');

  if (req.method === 'GET') {
    // Seed the database with default users if the collection is empty
    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertMany(defaultUsers);
    }

    const users = await collection.find({}).toArray();
    const mapped = users.map((u) => ({
      id: u._id.toString(),
      name: u.name,
      title: u.title,
      profilePicture: u.profilePicture,
    }));
    return res.status(200).json(mapped);
  }

  return res.status(405).end();
}
