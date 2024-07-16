// pages/contact.js
import Navbar from '../components/Navbar';

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main className="p-8 flex flex-col items-center">
                <h1 className="text-4xl mb-4">NOUS CONTACTER</h1>
                <p className="text-xl mb-2">2900 Bd Édouard-Montpetit, Montréal, QC H3T 1J4</p>
                <p className="text-lg">femmesetdroit.udem@gmail.com</p>
            </main>
        </div>
    );
}
