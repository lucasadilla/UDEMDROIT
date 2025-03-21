// components/Navbar.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Helper function to determine if a link is active
    const isActive = (path) => router.pathname === path;

    return (
        <nav className="bg-white p-4 flex items-center justify-center">
            <div className={`logo-container ${isOpen ? 'hidden' : ''}`}>
                <a href="/">
                    <img src="/images/logo femme et droit-Photoroom.png" alt="Logo" className="logo w-10 h-10" />
                </a>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''} md:flex-row md:flex space-x-4`}>
                <li>
                    <Link href="/">
                        <span className={`nav-link text-black ${isActive('/') ? 'underline font-bold' : ''}`}>Accueil</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <span className={`nav-link text-black ${isActive('/blog') ? 'underline font-bold' : ''}`}>Blog</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className={`nav-link text-black ${isActive('/contact') ? 'underline font-bold' : ''}`}>Contact</span>
                    </Link>
                </li>
                <li>
                    <Link href="/venir">
                        <span className={`nav-link text-black ${isActive('/venir') ? 'underline font-bold' : ''}`}>Événements</span>
                    </Link>
                </li>
                <li>
                    <Link href="/notre-comite">
                        <span className={`nav-link text-black ${isActive('/notre-comite') ? 'underline font-bold' : ''}`}>Notre Comité</span>
                    </Link>
                </li>
                <li>
                    <Link href="/guide">
                        <span className={`nav-link text-black ${isActive('/guide') ? 'underline font-bold' : ''}`}>Guide des commanditaires</span>
                    </Link>
                </li>
            </ul>
            <a
                href="https://www.instagram.com/femmesetdroit/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${isOpen ? 'hidden' : ''}`}
            >
                <img src="/images/insta.png" alt="Instagram" className="instagram-icon w-8 h-8" />
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
