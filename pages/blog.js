import { ArticlesProvider, useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from "../components/navbar";

export default function Blog() {
    const { articles } = useArticles();

    return (
        <div>
            <Navbar />
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <ArticleCard key={article.id} id={article.id} />
                ))}
            </div>
        </div>
    );
}