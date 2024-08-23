// pages/contact.js
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Here you can add code to send the email to your backend service
        setEmail('');
    };

    return (
        <div>
            <Navbar />
            <main className="p-8 flex flex-col items-center">
                <h1 className="text-4xl mb-4">NOUS CONTACTER</h1>
                <p className="text-xl mb-2">2900 Bd Édouard-Montpetit, Montréal, QC H3T 1J4</p>
                <p className="text-lg">femmesetdroit.udem@gmail.com</p>
                <form onSubmit={handleSubmit} className="mt-8 w-full max-w-sm">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Join our mailing list</label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 block w-full rounded-none rounded-l-md sm:text-sm border-gray-300"
                            placeholder="you@example.com"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700"
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
}