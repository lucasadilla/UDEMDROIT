import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const isDataUrl = (url) => typeof url === 'string' && url.startsWith('data:');

export default function ArticleCard({ article, isLarge }) {
    const [hearted, setHearted] = useState(false);

    const toggleHeart = () => {
        setHearted(!hearted);
    };

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div className={`article-card p-4 border rounded-lg shadow-md relative ${isLarge ? 'large-article-card' : ''}`}>
            <Link href={`/article/${article.id}`} legacyBehavior>
                <a>
                    {isDataUrl(article.image) ? (
                        <img src={article.image} alt={article.title} className="rounded-lg w-full h-auto" />
                    ) : (
                        <Image src={article.image} alt={article.title} width={600} height={400} className="rounded-lg" />
                    )}
                    <h2 className="text-2xl font-bold mt-4">{article.title}</h2>
                </a>
            </Link>
            <div className="flex items-center mt-2">
                {isDataUrl(article.authorImage) ? (
                    <img src={article.authorImage} alt={article.author} className="author-image w-10 h-10 rounded-full" />
                ) : (
                    <Image src={article.authorImage} alt={article.author} width={40} height={40} className="author-image" />
                )}
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