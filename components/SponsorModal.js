// components/SponsorModal.js
import React from 'react';

export default function SponsorModal({ sponsor, onClose, onNext, onPrev }) {
    if (!sponsor) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <img src={sponsor.image} alt={sponsor.name} className="large-image" />
                <div className="navigation">
                    <button onClick={onPrev}>Previous</button>
                    <button onClick={onNext}>Next</button>
                </div>
            </div>
        </div>
    );
}