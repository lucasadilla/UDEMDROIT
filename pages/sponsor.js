// pages/sponsor.js
import React, { useState } from 'react';
import Sponsor from '../components/Sponsors';
import SponsorModal from '../components/SponsorModal';
import Navbar from "../components/navbar";
import Footer from '../components/Footer';

const sponsors = [
    { id: 1, name: 'Cover Photo', image: '/images/sponsors/Page titre.png' },
    { id: 2, name: 'Sponsor 2', image: '/images/sponsors/Mot intro.png' },
    { id: 3, name: 'Sponsor 3', image: '/images/sponsors/Partenariat.png' },
    { id: 4, name: 'Sponsor 4', image: '/images/sponsors/2024-2025 en photos.png' },
    { id: 5, name: 'Sponsor 5', image: '/images/sponsors/Avantages.png' },
    { id: 6, name: 'Sponsor 6', image: '/images/sponsors/Catégories.png' },
    { id: 7, name: 'Sponsor 7', image: '/images/sponsors/Activités & événements.png' },
    { id: 8, name: 'Sponsor 8', image: '/images/sponsors/Exécutif 2024-2025.png' },
    { id: 9, name: 'Sponsor 9', image: '/images/sponsors/Présence médiatique.png' },
    { id: 10, name: 'Sponsor 10', image: '/images/sponsors/Remerciements.png' },
];

export default function SponsorsPage() {
    const [selectedSponsor, setSelectedSponsor] = useState(sponsors[0]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (sponsor) => {
        setSelectedSponsor(sponsor);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextSponsor = () => {
        const currentIndex = sponsors.findIndex(s => s.id === selectedSponsor.id);
        const nextIndex = (currentIndex + 1) % sponsors.length;
        setSelectedSponsor(sponsors[nextIndex]);
    };

    const prevSponsor = () => {
        const currentIndex = sponsors.findIndex(s => s.id === selectedSponsor.id);
        const prevIndex = (currentIndex - 1 + sponsors.length) % sponsors.length;
        setSelectedSponsor(sponsors[prevIndex]);
    };

    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="page-title text-center mb-8">Guide des commanditaires</h1>
                <div className="sponsor-box">
                    <div className="sponsors-grid">
                        {sponsors.map(sponsor => (
                            <Sponsor key={sponsor.id} sponsor={sponsor} onClick={() => openModal(sponsor)} />
                        ))}
                    </div>
                </div>
                {isModalOpen && (
                    <SponsorModal
                        sponsor={selectedSponsor}
                        onClose={closeModal}
                        onNext={nextSponsor}
                        onPrev={prevSponsor}
                        currentPage={sponsors.findIndex(s => s.id === selectedSponsor.id) + 1}
                        totalPages={sponsors.length}
                    />
                )}
            </main>
            <Footer />
        </div>
    );
}