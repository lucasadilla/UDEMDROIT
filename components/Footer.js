// components/Footer.js
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setIsAdmin(document.cookie.includes('admin-auth=true'));
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content flex items-center space-x-4">
                <span>©2024 Comité Femmes et Droit UdeM</span>
                <Link href={isAdmin ? '/admin' : '/login'} className="text-blue-500">
                    {isAdmin ? 'Admin Dashboard' : 'Admin Login'}
                </Link>
            </div>
        </footer>
    );
}