import React from 'react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content flex items-center justify-center space-x-4">
                <a href="https://www.instagram.com/femmesetdroit/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/insta.png" alt="Instagram" className="instagram-icon" />
                </a>
                <p className="email">femmesetdroit.udem@gmail.com</p>
            </div>
        </footer>
    );
}