// components/Sponsor.js
import React from 'react';

export default function Sponsor({ sponsor, onClick }) {
    return (
        <div className="sponsor">
            <img
                src={sponsor.image}
                alt={sponsor.name}
                className="small-image"
                onClick={() => onClick(sponsor)}
            />
        </div>
    );
}