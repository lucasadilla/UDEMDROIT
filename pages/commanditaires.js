// pages/commanditaires.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsors';
import React from "react";

const sponsored = [
    { id: 1, name: 'Osler', image: '/images/sponsors/osler.png', link: 'https://www.osler.com/en/' },
    { id: 2, name: 'Davies', image: '/images/sponsors/Davies.png', link: 'https://www.dwpv.com/en' },
    { id: 3, name: 'BLG', image: '/images/sponsors/BLG.png', link: 'https://www.blg.com/en' },
    { id: 4, name: 'Fasken', image: '/images/sponsors/fasken-removebg-preview.png', link: 'https://www.fasken.com/' },
    { id: 5, name: 'Blakes', image: '/images/sponsors/BLAKES.jpg', link: 'https://www.blakes.com/' },
];

export default function Commanditaires() {
    const handleSponsorClick = (sponsor) => {
        window.location.href = sponsor.link;
    };

    return (
        <div>
            <Navbar/>
            <h1 className="page-title text-center mb-4">Merci à nos commanditaires</h1> {/* Adjusted margin */}
            <div className="commanditaires-sponsored-grid">
                {sponsored.map(sponsor => (
                    <Sponsor key={sponsor.id} sponsor={sponsor} onClick={handleSponsorClick} />
                ))}
            </div>
            <Footer/>
        </div>
    );
}