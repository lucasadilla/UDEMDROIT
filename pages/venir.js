// pages/venir.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Head from "next/head";
import React from "react";


export default function Venir() {
    return (
        <div>
            <Head>
                <title>Événements à Venir</title>
                <meta name="description" content="Restez informé des événements à venir organisés par Femme & Droit à l'Université de Montréal." />
                <meta name="keywords" content="événements, à venir, féminisme, Université de Montréal, communauté" />
            </Head>
            <Navbar />
            <main className="p-8">
                <h1 className="page-title text-center mb-8">ÉVÉNEMENTS À VENIR</h1>
                <img src="/images/calendar.png"/>
            </main>
            <Footer/>
        </div>
    );
}