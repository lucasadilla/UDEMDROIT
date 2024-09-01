// pages/commanditaires.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sponsor from '../components/Sponsors';
import React from "react";

const sponsored = [
    { id: 1, name: 'Davies', image: '/images/sponsors/Davies.png', link: 'https://www.dwpv.com/en' },
];

export default function Commanditaires() {
    return (
        <div>
            <Navbar/>
            <main className="p-8">
                <h1 className="page-title text-center mb-8">Merci à nos commanditaires</h1>
                <div className="sponsored-grid">
                    {sponsored.map(sponsor => (
                        <Sponsor key={sponsor.id} sponsor={sponsor}/>
                    ))}
                </div>
                <Footer/>
                </main>
        </div>
);
}