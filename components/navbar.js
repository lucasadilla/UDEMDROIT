// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
                <img src="/images/logo.png" alt="Logo" className="logo w-10 h-10 mr-4" />
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <span className="nav-link">Accueil</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <span className="nav-link">Blog</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="nav-link">Contact</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/notre-comite">
                            <span className="nav-link">Notre Comité</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sponsor">
                            <span className="nav-link">Guide du Sponsor</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <a href="https://www.instagram.com/femmesetdroit/" target="_blank" rel="noopener noreferrer">
                <img src="/images/insta.png" alt="Instagram" className="instagram-icon w-8 h-8" />
            </a>
        </nav>
    );
}