// components/SponsorModal.js
import React, { useState } from 'react';
import Image from 'next/image';

export default function SponsorModal({ sponsor, onClose, onNext, onPrev, currentPage, totalPages }) {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
            <div className="modal-content bg-white p-4 rounded-lg relative max-w-2xl w-full">
                <div className="image-container">
                    <Image src={sponsor.image} alt={sponsor.name} layout="responsive" width={400} height={300} className="large-image rounded-lg" />
                </div>
                <div className="flex justify-between items-center mb-4">
                    <button onClick={onPrev} className="text-black">◀</button>
                    <span className="text-black">{currentPage} / {totalPages}</span>
                    <button onClick={onNext} className="text-black">▶</button>
                </div>
            </div>
        </div>
    );
}