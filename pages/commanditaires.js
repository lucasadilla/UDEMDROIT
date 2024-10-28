// pages/commanditaires.js
import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsors';
import React from "react";

const sponsored = [
    { id: 1, name: 'Osler', image: '/images/sponsors/osler.jpg', link: 'https://www.osler.com/en/' },
    { id: 2, name: 'Davies', image: '/images/sponsors/davies1.png', link: 'https://www.dwpv.com/en' },
    { id: 3, name: 'BLG', image: '/images/sponsors/BLG.png', link: 'https://www.blg.com/en' },
    { id: 4, name: 'Fasken', image: '/images/sponsors/faskengood.png', link: 'https://www.fasken.com/' },
    { id: 5, name: 'Blakes', image: '/images/sponsors/BLAKES.jpg', link: 'https://www.blakes.com/' },
];

export default function Commanditaires() {
    const handleSponsorClick = (sponsor) => {
        window.location.href = sponsor.link;
    };

    return (
        <div>
            <Navbar/>
            <main className="p-8">
                <h1 className="page-title text-center mb-4">Merci à nos commanditaires</h1> {/* Adjusted margin */}
                <div className="commanditaires-sponsored-grid">
                    {sponsored.map(sponsor => (
                        <Sponsor key={sponsor.id} sponsor={sponsor} onClick={handleSponsorClick}/>
                    ))}
                </div>
            </main>
                <Footer/>
        </div>
);
}