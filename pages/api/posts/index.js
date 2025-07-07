import { parse } from 'cookie';
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('posts');

  if (req.method === 'GET') {
    const posts = await collection.find({}).toArray();
    const mapped = posts.map((p) => ({ ...p, id: p._id }));
    return res.status(200).json(mapped);
  }

  if (req.method === 'POST') {
    const cookies = parse(req.headers.cookie || '');
    if (cookies['admin-auth'] !== 'true') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, content } = req.body;
    const newPost = {
      title,
      content,
      date: new Date().toISOString(),
    };
    const result = await collection.insertOne(newPost);
    newPost._id = result.insertedId;
    return res.status(201).json({ ...newPost, id: newPost._id });
  }

  return res.status(405).end();
}
