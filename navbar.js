// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-around">
                <li>
                    <Link href="/">
                        <span className="text-white">Accueil</span>
                    </Link>
                </li>
                <li>
                    <Link href="/blog">
                        <span className="text-white">Blog</span>
                    </Link>
                </li>
                <li>
                    <Link href="/contact">
                        <span className="text-white">Contact</span>
                    </Link>
                </li>
                <li>
                    <Link href="/notre-comite">
                        <span className="text-white">Notre Comité</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
