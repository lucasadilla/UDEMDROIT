function serializeCookie(name, value, options = {}) {
  const opt = { path: '/', ...options };
  const parts = [`${name}=${value}`];
  if (opt.path) parts.push(`Path=${opt.path}`);
  if (opt.httpOnly) parts.push('HttpOnly');
  if (opt.secure) parts.push('Secure');
  if (opt.sameSite) parts.push(`SameSite=${opt.sameSite}`);
  if (opt.maxAge) parts.push(`Max-Age=${opt.maxAge}`);
  if (opt.expires) parts.push(`Expires=${opt.expires.toUTCString()}`);
  return parts.join('; ');
}

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    const cookie = serializeCookie('admin-auth', 'true', { path: '/' });
    res.setHeader('Set-Cookie', cookie);
    return res.status(200).json({ message: 'Logged in' });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
}
