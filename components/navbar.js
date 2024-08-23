// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around">
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
                        <span className="nav-link">Sponsor's Guide</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}