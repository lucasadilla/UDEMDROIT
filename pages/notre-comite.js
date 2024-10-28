// pages/notre-comite.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Head from "next/head";
import React from "react";

const members = [
    { name: "Kiana Salesian-Zanjani", title: "Présidente", image: "/images/Kiana.JPG" },
    { name: "Élie Legault", title: "VP Communications", image: "/images/bbg.jpeg" },
    { name: "Marie-Laurence Desmarais", title: "VP Affaires Externes", image: "/images/marie laurence.JPG" },
    { name: "Negin Samadi", title: "Trésorière", image: "/images/Negin.jpg" },
    { name: "Maweya Mbingala", title: "Secrétaire générale", image: "/images/Maweya.jpeg" },
    { name: "Tatiana Stephan", title: "VP Évènements", image: "/images/Tatiana.jpeg" },
    { name: "Lina Tourabi", title: "VP Première", image: "/images/lina.png" }
];

export default function NotreComite() {
    return (
        <div>
            <Head>
                <title>Notre Comité</title>
            </Head>
            <Navbar />
            <main className="p-8">
                <h1 className="page-title text-center mb-8">NOTRE COMITÉ</h1>

                {/* Grid layout for all members except the last one (Lina Tourabi) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.slice(0, members.length - 1).map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img src={member.image} alt={member.name} className="rounded-full w-64 h-32 sm:w-64 sm:h-80 lg:w-96 lg:h-96 mb-4 object-cover border-image" />
                            <h2 className="text-xl font-semibold">{member.name}</h2>
                            <p className="text-gray-600">{member.title}</p>
                        </div>
                    ))}
                </div>

                {/* Centered row for Lina Tourabi */}
                <div className="flex justify-center mt-8">
                    <div className="flex flex-col items-center text-center">
                        <img src="/images/lina.png" alt="Lina Tourabi" className="rounded-full w-64 h-32 sm:w-64 sm:h-80 lg:w-96 lg:h-96 mb-4 object-cover border-image" />
                        <h2 className="text-xl font-semibold">Lina Tourabi</h2>
                        <p className="text-gray-600">VP Première</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
