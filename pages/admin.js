import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [date, setDate] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!document.cookie.includes('admin-auth=true')) {
      router.push('/login');
    } else {
      fetchPosts();
    }
  }, []);

  const fetchPosts = async () => {
    const res = await fetch('/api/posts', {
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      setPosts(data);
    }
  };

  const handleFile = (file, setter) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setter(reader.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        title,
        content,
        author,
        date,
        authorImage,
        image,
      }),
    });
    if (res.ok) {
      const post = await res.json();
      setPosts((p) => [...p, post]);
      setTitle('');
      setContent('');
      setAuthor('');
      setDate('');
      setAuthorImage('');
      setImage('');
    } else if (res.status === 401) {
      router.push('/login');
    } else {
      setError('Error saving post');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Post</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mb-4">
        <input
          className="border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          className="border p-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
        />
        <input
          className="border p-2"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <input
          className="border p-2"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          className="border p-2"
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files[0], setAuthorImage)}
        />
        <input
          className="border p-2"
          type="file"
          accept="image/*"
          onChange={(e) => handleFile(e.target.files[0], setImage)}
        />
        <button className="bg-blue-500 text-white p-2" type="submit">
          Save
        </button>
      </form>

      <h2 className="text-lg font-semibold mb-2">Existing Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id} className="mb-2">
            <strong>{p.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
