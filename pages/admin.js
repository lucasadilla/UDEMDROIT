import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [date, setDate] = useState('');
  const [authorImage, setAuthorImage] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (!document.cookie.includes('admin-auth=true')) {
      router.push('/login');
    } else {
      fetchPosts();
      fetchAuthors();
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

  const fetchAuthors = async () => {
    const res = await fetch('/api/users');
    if (res.ok) {
      const data = await res.json();
      setAuthors(data);
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
      setAuthorId('');
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
        <div className="flex items-center space-x-2">
          <select
            className="border p-2 flex-1"
            value={authorId}
            onChange={(e) => {
              const selected = authors.find((u) => u.id === e.target.value);
              setAuthorId(e.target.value);
              setAuthor(selected ? selected.name : '');
              setAuthorImage(selected ? selected.profilePicture : '');
            }}
          >
            <option value="">Select Author</option>
            {authors.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
          {authorImage && (
            <img
              src={authorImage}
              alt={author}
              className="w-10 h-10 rounded-full object-cover"
            />
          )}
        </div>
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
