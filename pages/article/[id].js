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

    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <div className="flex items-center mb-4">
                    <Image src={article.authorImage} alt={article.author} width={40} height={40} className="author-image" />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">{article.author}</p>
                        <p className="text-sm text-gray-600">{article.date}</p>
                    </div>
                </div>
                <p>{article.content}</p>
            </main>
        </div>
    );
}