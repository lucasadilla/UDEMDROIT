import { ArticlesProvider, useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from "../components/navbar";
import Footer from '../components/Footer';


export default function Blog() {
    const { articles } = useArticles();

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <ArticleCard key={article.id} id={article.id} />
                ))}
            </div>
            <Footer />
        </div>
    );
}