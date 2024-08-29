import React, { useState } from 'react';
import Image from 'next/image';

export default function ImageCarouselCard({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-card">
            <div className="image-container">
                <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} width={400} height={300} className="carousel-image" />
            </div>
            <div className="navigation">
                <button onClick={handlePrev} className="nav-button">←</button>
                <span className="page-counter">{currentIndex + 1} / {images.length}</span>
                <button onClick={handleNext} className="nav-button">→</button>
            </div>
        </div>
    );
}