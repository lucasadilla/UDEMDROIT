import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useArticles } from '../context/ArticlesContext';

export default function ArticleCard({ id }) {
    const { articles } = useArticles();
    const article = articles.find(article => article.id === id);
    const [hearted, setHearted] = useState(false);

    const toggleHeart = () => {
        setHearted(!hearted);
    };

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div className="article-card p-4 border rounded-lg shadow-md relative">
            <Link href={`/article/${id}`} legacyBehavior>
                <a>
                    <Image src={article.image} alt={article.title} width={600} height={400} className="rounded-lg" />
                    <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
                </a>
            </Link>
            <div className="flex items-center mt-2">
                <Image src={article.authorImage} alt={article.author} width={40} height={40} className="author-image" />
                <div className="ml-2">
                    <p className="text-sm font-semibold">{article.author}</p>
                    <p className="text-sm text-gray-600">{article.date}</p>
                </div>
            </div>
            <p className="mt-4">{article.content.substring(0, 100)}...</p>
            <button onClick={toggleHeart} className="heart-button absolute top-4 right-4">
                {hearted ? '❤️' : '🤍'}
            </button>
        </div>
    );
}