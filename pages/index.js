// pages/index.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';
import ArticleCard from '../components/ArticleCard';
import { useArticles } from '../context/ArticlesContext';
import SponsorsBar from "../components/Sponsors";
import Head from 'next/head';
import React from "react";

export default function Home() {
    const { articles } = useArticles();

    const topThreeArticles = (articles ?? []).slice(0, 3);

    return (
        <div>
            <Head>
                <title>Accueil</title>
                <meta name="description" content="Femme & Droit - Promotion du féminisme intersectionnel auprès de la communauté étudiante de l'Université de Montréal."/>
                <meta name="keywords" content="féminisme, intersectionnalité, Université de Montréal, communauté, féminisme étudiant"/>
            </Head>
            <Navbar/>
            <main className="relative">
                <div className="banner">
                    <img src="/images/front.jpg" alt="Banner" className="w-full h-auto"/>
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
                <SponsorsBar />
            </main>
            <Footer />
        </div>
    );
}