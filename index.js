// pages/index.js
import Navbar from '../components/Navbar';

export default function Home() {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl text-center mb-8">Bienvenue à notre site web!</h1>
            </main>
        </div>
    );
}
