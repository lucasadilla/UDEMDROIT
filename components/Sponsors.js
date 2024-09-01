// components/Sponsor.js
import React from 'react';

export default function Sponsor({ sponsor }) {
    return (
        <a href={sponsor.link} target="_blank" rel="noopener noreferrer" className="sponsor">
            <img src={sponsor.image} alt={sponsor.name} className="small-image" />
        </a>
    );
}