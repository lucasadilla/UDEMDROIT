import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const cookie = serialize('admin-auth', 'true', { path: '/' });
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ message: 'Logged in' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
}
