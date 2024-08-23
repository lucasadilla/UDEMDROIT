// pages/article/[id].js
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';
import { ArticlesProvider, useArticles } from '../../context/ArticlesContext';

export default function Article() {
    const router = useRouter();
    const { id } = router.query;
    const { articles } = useArticles();
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <ArticlesProvider>
            <div>
                <Navbar />
                <main className="p-8">
                    <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                    <img src={article.image} alt={article.title} className="rounded-lg mb-4" />
                    <div className="flex items-center mb-4">
                        <img src={article.authorImage} alt={article.author} className="rounded-full w-10 h-10" />
                        <div className="ml-2">
                            <p className="text-sm font-semibold">{article.author}</p>
                            <p className="text-sm text-gray-600">{article.date}</p>
                        </div>
                    </div>
                    <p>{article.content}</p>
                </main>
            </div>
        </ArticlesProvider>
    );
}