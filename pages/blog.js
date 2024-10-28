import { ArticlesProvider, useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Blog() {
    const { articles } = useArticles();
    console.log('Articles:', articles); // Debugging line

    if (!articles || articles.length === 0) {
        return <p>No articles found</p>;
    }

    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
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