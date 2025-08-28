import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useArticles } from '../context/ArticlesContext';

export default function Admin() {
  const router = useRouter();
  const { setArticles } = useArticles();
  const [articles, setLocalArticles] = useState([]);
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
      fetchArticles();
    }
  }, []);

  const fetchArticles = async () => {
    const res = await fetch('/api/articles', {
      credentials: 'include',
    });
    if (res.ok) {
      const data = await res.json();
      setLocalArticles(data);
      setArticles(data);
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
    const res = await fetch('/api/articles', {
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
      const article = await res.json();
      setLocalArticles((p) => [...p, article]);
      setArticles((p) => [...p, article]);
      setTitle('');
      setContent('');
      setAuthor('');
      setDate('');
      setAuthorImage('');
      setImage('');
    } else if (res.status === 401) {
      router.push('/login');
    } else {
      setError('Error saving article');
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Article</h1>
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
        <div className="flex items-center space-x-2">
          <input
            className="border p-2 flex-1"
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files[0], setAuthorImage)}
          />
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
        <div className="flex items-center space-x-2">
          <input
            className="border p-2 flex-1"
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files[0], setImage)}
          />
          {image && (
            <img
              src={image}
              alt="Preview"
              className="w-16 h-16 object-cover"
            />
          )}
        </div>
        <button className="bg-blue-500 text-white p-2" type="submit">
          Save
        </button>
      </form>

      <h2 className="text-lg font-semibold mb-2">Existing Articles</h2>
      <ul>
        {articles.map((a) => (
          <li key={a.id} className="mb-2">
            <strong>{a.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
