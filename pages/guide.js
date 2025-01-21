import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import Head from "next/head";

const sponsors = [
    { id: 1, name: "Cover Photo", image: "/images/sponsors/Page titre.png" },
    { id: 2, name: "Sponsor 2", image: "/images/sponsors/Exécutif 2024-2025.png" },
    { id: 3, name: "Sponsor 3", image: "/images/sponsors/Mot intro.png" },
    { id: 4, name: "Sponsor 4", image: "/images/sponsors/Partenariat.png" },
    { id: 5, name: "Sponsor 5", image: "/images/sponsors/Avantages.png" },
    { id: 6, name: "Sponsor 6", image: "/images/sponsors/Catégories.png" },
    { id: 7, name: "Sponsor 7", image: "/images/sponsors/2024-2025 en photos.png" },
    { id: 8, name: "Sponsor 8", image: "/images/sponsors/Activités & événements.png" },
    { id: 9, name: "Sponsor 9", image: "/images/sponsors/Présence médiatique.png" },
    { id: 10, name: "Sponsor 10", image: "/images/sponsors/Remerciements.png" },
];

export default function GuidePage() {
    const [selectedSponsor, setSelectedSponsor] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setSelectedSponsor(sponsors[index]);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedSponsor(null);
        setCurrentIndex(0);
    };

    const nextImage = () => {
        const nextIndex = (currentIndex + 1) % sponsors.length;
        setSelectedSponsor(sponsors[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const prevImage = () => {
        const prevIndex = (currentIndex - 1 + sponsors.length) % sponsors.length;
        setSelectedSponsor(sponsors[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    return (
        <div>
            <Head>
                <title>Guide des Commanditaires</title>
                <meta
                    name="description"
                    content="Découvrez notre guide des commanditaires avec toutes les images en aperçu."
                />
                <meta
                    name="keywords"
                    content="commanditaires, guide, partenaires, photos, féminisme, Université de Montréal"
                />
            </Head>
            <Navbar />
            <main className="p-8">
                <h1 className="page-title text-center mb-8">
                    Guide des Commanditaires
                </h1>
                <div className="sponsor-gallery">
                    {sponsors.map((sponsor, index) => (
                        <img
                            key={sponsor.id}
                            src={sponsor.image}
                            alt={sponsor.name}
                            className="sponsor-image rounded-lg cursor-pointer hover:shadow-lg"
                            onClick={() => openModal(index)}
                        />
                    ))}
                </div>
                {selectedSponsor && (
                    <div className="modal">
                        <div className="modal-content">
                            <img
                                src={selectedSponsor.image}
                                alt={selectedSponsor.name}
                                className="modal-image"
                            />
                            {/* Close Button */}
                            <button className="close" onClick={closeModal}>
                                &times;
                            </button>
                            {/* Previous Button */}
                            <button className="prev" onClick={prevImage}>
                                &lt;
                            </button>
                            {/* Next Button */}
                            <button className="next" onClick={nextImage}>
                                &gt;
                            </button>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
