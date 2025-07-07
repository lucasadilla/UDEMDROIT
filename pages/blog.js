import { useEffect, useState } from 'react';
import { useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import SponsorsBar from '../components/Sponsors';
import Head from 'next/head';

export default function Blog() {
    const { articles } = useArticles();
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const res = await fetch('/api/posts');
            if (res.ok) {
                const data = await res.json();
                setPosts([...articles, ...data]);
            } else {
                setPosts(articles);
            }
            setLoading(false);
        }
        load();
    }, [articles]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!posts || posts.length === 0) {
        return <p>No articles found</p>;
    }

    return (
        <div>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Lisez des articles sur le féminisme intersectionnel et les événements communautaires à l'Université de Montréal."/>
                <meta name="keywords" content="féminisme, blog, articles, Université de Montréal, communauté"/>
            </Head>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((article) => (
                    <ArticleCard key={article.id} article={article} isLarge={true}/>
                ))}
            </div>
            <SponsorsBar />
            <Footer />
        </div>
    );
}
