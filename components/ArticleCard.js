import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ id, title, image, author, authorImage, date }) {
    const [hearted, setHearted] = useState(false);

    const toggleHeart = () => {
        setHearted(!hearted);
    };

    return (
        <div className="article-card p-4 border rounded-lg shadow-md relative">
            <Link href={`/article/${id}`} legacyBehavior>
                <a>
                    <Image src={image} alt={title} width={600} height={400} className="rounded-lg" />
                    <h2 className="text-2xl font-bold mt-4">{title}</h2>
                </a>
            </Link>
            <div className="flex items-center mt-2">
                <Image src={authorImage} alt={author} width={40} height={40} className="rounded-full" />
                <div className="ml-2">
                    <p className="text-sm font-semibold">{author}</p>
                    <p className="text-sm text-gray-600">{date}</p>
                </div>
            </div>
            <button onClick={toggleHeart} className="heart-button absolute top-4 right-4">
                {hearted ? '❤️' : '🤍'}
            </button>
        </div>
    );
}