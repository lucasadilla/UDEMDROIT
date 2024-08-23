// pages/article/[id].js
import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar';

const articles = [
    {
        id: 1,
        title: 'First Article',
        image: '/images/article1.jpg',
        author: 'John Doe',
        authorImage: '/images/john.jpg',
        date: 'January 1, 2023',
        content: 'This is the content of the first article.',
    },
    {
        id: 2,
        title: 'Second Article',
        image: '/images/article2.jpg',
        author: 'Jane Smith',
        authorImage: '/images/jane.jpg',
        date: 'February 15, 2023',
        content: 'This is the content of the second article.',
    },
    // Add more articles as needed
];

export default function Article() {
    const router = useRouter();
    const { id } = router.query;
    const article = articles.find((article) => article.id === parseInt(id));

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <img src={article.image} alt={article.title} className="rounded-lg mb-4" />
                <div className="flex items-center mb-4">
                    <img src={article.authorImage} alt={article.author} className="rounded-full w-10 h-10" />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">{article.author}</p>
                        <p className="text-sm text-gray-600">{article.date}</p>
                    </div>
                </div>
                <p>{article.content}</p>
            </main>
        </div>
    );
}