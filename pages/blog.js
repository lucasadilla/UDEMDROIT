import { useEffect, useState } from 'react';
import { useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import SponsorsBar from '../components/Sponsors';
import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
    const { articles } = useArticles();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(document.cookie.includes('admin-auth=true'));
    }, []);

    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Lisez des articles sur le féminisme intersectionnel et les événements communautaires à l'Université de Montréal."/>
                <meta name="keywords" content="féminisme, blog, articles, Université de Montréal, communauté"/>
            </Head>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} isLarge={true}/>
                ))}
            </div>
            {isAdmin && (
                <div className="my-8 text-center">
                    <Link href="/admin" className="bg-blue-500 text-white px-4 py-2 rounded">Go to Admin Dashboard</Link>
                </div>
            )}
            <SponsorsBar />
            <Footer />
        </div>
    );
}
