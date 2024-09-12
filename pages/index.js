// pages/index.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import ArticleCard from '../components/ArticleCard';
import { useArticles } from '../context/ArticlesContext';

export default function Home() {
    const { articles } = useArticles();
    console.log('Articles:', articles); // Debugging line

    if (!articles || articles.length === 0) {
        return <p>No articles found</p>;
    }

    const topThreeArticles = articles.slice(0, 3);

    return (
        <div>
            <Navbar />
            <main className="relative">
                <div className="banner">
                        <img src="/images/front.JPG" alt="Banner" className="w-full h-auto" />
                    <div className="banner-text-box">
                        <h1 className="text-4xl text-center text-white">FEMME & DROIT</h1>
                        <h2 className="text-4xl text-center text-white mt-4"> Promotion du féminisme intersectionnel auprès de la communauté étudiante de l'Université de Montréal</h2>
                    </div>
                </div>
                <section className="recent-articles">
                    <h2 className="text-2xl text-center mt-8 mb-4">Articles Récents</h2>
                    <div className="article-cards-container">
                        {topThreeArticles.map((article) => (
                            <ArticleCard key={article.id} article={article} isLarge={false} />
                        ))}
                    </div>
                </section>
                <ContactCard />
            </main>
            <Footer />
        </div>
    );
}