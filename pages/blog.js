import { ArticlesProvider, useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

export default function Blog() {
    const { articles } = useArticles();
    console.log('Articles:', articles); // Debugging line

    if (!articles || articles.length === 0) {
        return <p>No articles found</p>;
    }

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} isLarge={true} />
                ))}
            </div>
            <Footer />
        </div>
    );
}