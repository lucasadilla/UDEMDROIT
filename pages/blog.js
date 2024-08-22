// pages/blog.js
import ArticleCard from '../components/ArticleCard';
import Navbar from "../components/navbar";


const articles = [
    {
        title: 'First Article',
        image: '/images/article1.jpg',
        author: 'John Doe',
        authorImage: '/images/john.jpg',
        date: 'January 1, 2023',
    },
    {
        title: 'Second Article',
        image: '/images/article2.jpg',
        author: 'Jane Smith',
        authorImage: '/images/jane.jpg',
        date: 'February 15, 2023',
    },
    // Add more articles as needed
];

export default function Blog() {
    return (
        <div className="container mx-auto p-4">
            <Navbar />
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                    <ArticleCard key={index} {...article} />
                ))}
            </div>
        </div>
    );
}