import clientPromise from '../../../lib/mongodb';

function parseCookies(header) {
  const list = {};
  if (!header) return list;
  header.split(';').forEach((cookie) => {
    const [name, ...rest] = cookie.trim().split('=');
    if (!name) return;
    const value = rest.join('=');
    list[decodeURIComponent(name)] = decodeURIComponent(value);
  });
  return list;
}

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();
  const collection = db.collection('posts');

  if (req.method === 'GET') {
    const posts = await collection.find({}).toArray();
    const mapped = posts.map((p) => ({
      ...p,
      id: p._id.toString(),
    }));
    return res.status(200).json(mapped);
  }

  if (req.method === 'POST') {
    const cookies = parseCookies(req.headers.cookie || '');
    if (cookies['admin-auth'] !== 'true') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, content, author, date, authorImage, image } = req.body;
    const newPost = {
      title,
      content,
      author,
      date,
      authorImage,
      image,
    };
    const result = await collection.insertOne(newPost);
    // Ensure the returned post has a string id so the frontend can use it directly
    return res
      .status(201)
      .json({
        ...newPost,
        id: result.insertedId.toString(),
      });
  }

  return res.status(405).end();
}
