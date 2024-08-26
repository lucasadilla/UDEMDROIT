// pages/article/[id].js
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { useArticles } from '../../context/ArticlesContext';
import Image from 'next/image';

export default function Article() {
    const router = useRouter();
    const { id } = router.query;
    const { articles } = useArticles();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <p>Article not found</p>;
    }

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.content.substring(0, 100) + '...',
                url: window.location.href,
            }).then(() => {
                console.log('Article shared successfully');
            }).catch((error) => {
                console.error('Error sharing article:', error);
            });
        } else {
            console.log('Web Share API not supported in this browser');
        }
    };

    return (
        <div>
            <Navbar />
            <main className="article-page">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <div className="flex items-center mb-4">
                    <Image src={article.authorImage} alt={article.author} width={40} height={40} className="author-image" />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">{article.author}</p>
                        <p className="text-sm text-gray-600">{article.date}</p>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br />') }} />
                <button onClick={handleShare} className="mt-4 p-2 bg-blue-500 text-white rounded">Share this article</button>
            </main>
        </div>
    );
}