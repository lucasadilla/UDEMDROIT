import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar';
import { useArticles } from '../../context/ArticlesContext';
import Image from 'next/image';
import ImageCarouselCard from '../../components/ImageCarouselCard';

export default function Article() {
    const router = useRouter();
    const { id } = router.query;
    const { articles } = useArticles();
    const article = articles.find((article) => article.id === parseInt(id));

    // Separate image arrays for different articles
    const imagesForArticle1 = [
        '/images/blogs/bonnes/1.jpg',
        '/images/blogs/bonnes/2.jpg',
        '/images/blogs/bonnes/3.jpg',
    ];

    const imagesForArticle3 = [
        '/images/blogs/jour/1.png',
        '/images/blogs/jour/2.png',
        '/images/blogs/jour/3.png',
    ];

    if (!article) {
        return <p>Article not found</p>;
    }

    const handleBack = () => {
        router.back();
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: article.title,
                text: article.content.substring(0, 100) + '...',
                url: window.location.href,
            })
                .then(() => {
                    console.log('Article shared successfully');
                })
                .catch((error) => {
                    console.error('Error sharing article:', error);
                });
        } else {
            console.log('Web Share API not supported in this browser');
        }
    };

    return (
        <div>
            <Navbar />
            <main className="article-page article-box">
                <button onClick={handleBack} className="back-button">← Arrière</button>
                <h1 className="article-title font-bold mb-4">{article.title}</h1>

                <div className="flex items-center mb-4">
                    <Image
                        src={article.authorImage}
                        alt={article.author}
                        width={40}
                        height={40}
                        className="author-image"
                    />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">{article.author}</p>
                        <p className="text-sm text-gray-600">{article.date}</p>
                    </div>
                </div>

                <div
                    dangerouslySetInnerHTML={{
                        __html: article.content.replace(/\n/g, '<br />'),
                    }}
                />

                {/* Conditionally render the carousel based on the article id */}
                {article.id === 1 && <ImageCarouselCard images={imagesForArticle1} />}
                {article.id === 3 && <ImageCarouselCard images={imagesForArticle3} />}

                <button onClick={handleShare} className="share-button">
                    Partagez cet article
                </button>
            </main>
            <Footer />
        </div>
    );
}
