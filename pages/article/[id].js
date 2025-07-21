import { useRouter } from 'next/router';
import Footer from '../../components/Footer';
import Navbar from '../../components/navbar';
import { useArticles } from '../../context/ArticlesContext';
import Image from 'next/image';
import ImageCarouselCard from '../../components/ImageCarouselCard';
import { useEffect, useState } from 'react';

export default function Article() {
    const router = useRouter();
    const { id } = router.query;
    const { articles } = useArticles();
    const [post, setPost] = useState(null);
    const article = articles.find((a) => String(a.id) === id);

    useEffect(() => {
        if (!article && id) {
            fetch('/api/posts')
                .then((res) => res.json())
                .then((data) => {
                    const found = data.find((p) => String(p.id) === id);
                    if (found) setPost(found);
                });
        }
    }, [article, id]);

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

    const currentArticle = article || post;

    if (!currentArticle) {
        return <p>Article not found</p>;
    }

    const handleBack = () => {
        router.back();
    };

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: currentArticle.title,
                text: currentArticle.content.substring(0, 100) + '...',
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
                <h1 className="article-title font-bold mb-4">{currentArticle.title}</h1>

                <div className="flex items-center mb-4">
                    <Image
                        src={currentArticle.authorImage}
                        alt={currentArticle.author}
                        width={40}
                        height={40}
                        className="author-image"
                    />
                    <div className="ml-2">
                        <p className="text-sm font-semibold">{currentArticle.author}</p>
                        <p className="text-sm text-gray-600">{currentArticle.date}</p>
                    </div>
                </div>

                <div
                    dangerouslySetInnerHTML={{
                        __html: currentArticle.content.replace(/\n/g, '<br />'),
                    }}
                />

                {/* Conditionally render the carousel based on the article id */}
                {currentArticle.id === 1 && <ImageCarouselCard images={imagesForArticle1} />}
                {currentArticle.id === 3 && <ImageCarouselCard images={imagesForArticle3} />}

                <button onClick={handleShare} className="share-button">
                    Partagez cet article
                </button>
            </main>
            <Footer />
        </div>
    );
}
