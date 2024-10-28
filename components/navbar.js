// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-4 flex items-center justify-center">
            <div className={`logo-container ${isOpen ? 'hidden' : ''}`}>
                <a href="/">
                    <img src="/images/logo femme et droit-Photoroom.png" alt="Logo" className="logo w-10 h-10"/>
                </a>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''} md:flex-row md:flex space-x-4`}>
                <li>
                </li>
                <li>
                    <Link href="/">
                        <span className="nav-link text-black">Accueil</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <span className="nav-link text-black">Blog</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className="nav-link text-black">Contact</span>
                    </Link>
                </li>
                <li>
                    <Link href="/notre-comite">
                        <span className="nav-link text-black">Notre Comité</span>
                    </Link>
                </li>
                <li>
                    <Link href="/guide">
                        <span className="nav-link text-black">Guide des commanditaires</span>
                    </Link>
                </li>
                <li>
                    <Link href="/commanditaires">
                        <span className="nav-link text-black">Nos commanditaires</span>
                    </Link>
                </li>
            </ul>
            <a href="https://www.instagram.com/femmesetdroit/" target="_blank" rel="noopener noreferrer"
               className={`${isOpen ? 'hidden' : ''}`}>
                <img src="/images/insta.png" alt="Instagram" className="instagram-icon w-8 h-8"/>
            </a>
            <button className="hamburger-icon" onClick={toggleMenu}>
                <div>
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black mb-1"></span>
                    <span className="block w-6 h-0.5 bg-black"></span>
                </div>
            </button>
        </nav>
    );
}