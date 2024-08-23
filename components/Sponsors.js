// components/Sponsor.js
import React from 'react';

export default function Sponsor({ sponsor, onClick }) {
    return (
        <div className="sponsor" onClick={() => onClick(sponsor)}>
            <img src={sponsor.image} alt={sponsor.name} className="small-image" />
        </div>
    );
}