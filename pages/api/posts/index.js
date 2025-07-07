import fs from 'fs';
import path from 'path';
import { parse } from 'cookie';

const postsFile = path.join(process.cwd(), 'data', 'posts.json');

export default function handler(req, res) {
  if (req.method === 'GET') {
    const posts = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
    return res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    const cookies = parse(req.headers.cookie || '');
    if (cookies['admin-auth'] !== 'true') {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, content } = req.body;
    const posts = JSON.parse(fs.readFileSync(postsFile, 'utf8'));
    const newPost = {
      id: Date.now(),
      title,
      content,
      date: new Date().toISOString(),
    };
    posts.push(newPost);
    fs.writeFileSync(postsFile, JSON.stringify(posts, null, 2));
    return res.status(201).json(newPost);
  }

  return res.status(405).end();
}
