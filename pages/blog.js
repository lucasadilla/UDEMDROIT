// pages/blog.js
import Navbar from '../components/Navbar';

export default function Blog() {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl">Blog</h1>
                <p>Découvrez nos articles de blog!</p>
            </main>
        </div>
    );
}
