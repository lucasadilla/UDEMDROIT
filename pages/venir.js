// pages/venir.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Head from "next/head";
import React from "react";
import SponsorsBar from "../components/Sponsors";

export default function Venir() {
    return (
        <div>
            <Head>
                <title>Événements à Venir</title>
                <meta
                    name="description"
                    content="Restez informé des événements à venir organisés par Femme & Droit à l'Université de Montréal."
                />
                <meta
                    name="keywords"
                    content="événements, à venir, féminisme, Université de Montréal, communauté"
                />
            </Head>
            <Navbar />
            <main className="p-8">
                <h1 className="page-title text-center mb-8">ÉVÉNEMENTS À VENIR</h1>

                {/* Desktop version */}
                <div className="hidden md:block">
                    <img
                        src="/images/Feb.png" // Replace with your desktop PNG path
                        alt="Calendar for Desktop"
                        className="calendar w-full"
                    />
                </div>

                {/* Mobile version */}
                <div className="block md:hidden">
                    <img
                        src="/images/FebPhone.png" // Replace with your mobile PNG path
                        alt="Calendar for Mobile"
                        className="calendar w-full"
                    />
                </div>

                <SponsorsBar />
            </main>
            <Footer />
        </div>
    );
}
