import { ArticlesProvider, useArticles } from '../context/ArticlesContext';
import ArticleCard from '../components/ArticleCard';
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import SponsorsBar from "../components/Sponsors";
import Head from 'next/head';
import React from "react";

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
                <meta name="description" content="Lisez des articles sur le féminisme intersectionnel et les événements communautaires à l'Université de Montréal."/>
                <meta name="keywords" content="féminisme, blog, articles, Université de Montréal, communauté"/>
            </Head>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <ArticleCard key={article.id} article={article} isLarge={true}/>
                ))}
            </div>
            <SponsorsBar />
            <Footer />
        </div>
    );
}