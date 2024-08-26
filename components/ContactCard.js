// components/ContactCard.js
import { useState } from 'react';

export default function ContactCard() {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        objet: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className="contact-page p-8">
            <div className="flex">
                <div className="w-1/2 pr-8">
                    <h2 className="text-2xl font-bold mb-4">NOUS CONTACTER</h2>
                    <p>2900 Bd Édouard-Montpetit, Montréal, QC H3T 1J4</p>
                    <p>femmesetdroit.udem@gmail.com</p>
                </div>
                <div className="w-1/2">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="mb-4">
                            <label htmlFor="nom" className="block text-sm font-semibold mb-2">Nom</label>
                            <input
                                type="text"
                                id="nom"
                                name="nom"
                                value={formData.nom}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-semibold mb-2">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Votre e-mail"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="objet" className="block text-sm font-semibold mb-2">Objet</label>
                            <input
                                type="text"
                                id="objet"
                                name="objet"
                                value={formData.objet}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Objet de votre message"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                placeholder="Votre message"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Envoyer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}