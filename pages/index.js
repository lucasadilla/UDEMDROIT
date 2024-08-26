// pages/index.js
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactCard from '../components/ContactCard';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="relative">
                <div className="banner">
                    <img src="/images/front.png" alt="Banner" className="w-full h-auto" />
                    <div className="overlay">
                        <h1 className="text-4xl text-center text-white">LA RECHERCHE AU FÉMININ</h1>
                        <h2 className="text-4xl text-center text-white mt-4">Promouvoir le féminisme intersectionnel par la recherche et la sensibilisation</h2>
                    </div>
                </div>
                <ContactCard />
            </main>
            <Footer />
        </div>
    );
}