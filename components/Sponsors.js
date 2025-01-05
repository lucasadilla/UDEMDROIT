import React, { useEffect } from 'react';

export default function SponsorsBar() {
    const sponsors = [
        { id: 1, name: 'Osler', image: '/images/sponsors/osler.jpg' },
        { id: 2, name: 'Davies', image: '/images/sponsors/davies1.png' },
        { id: 3, name: 'BLG', image: '/images/sponsors/BLG.png' },
        { id: 4, name: 'Fasken', image: '/images/sponsors/faskengood.png' },
        { id: 5, name: 'Blakes', image: '/images/sponsors/BLAKES.jpg' },
    ];

    useEffect(() => {
        const scrollers = document.querySelectorAll('.scroller');

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            scrollers.forEach((scroller) => {
                scroller.setAttribute('data-animated', true);

                const scrollerInner = scroller.querySelector('.scroller__inner');
                const scrollerContent = Array.from(scrollerInner.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute('aria-hidden', true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div className="scroller" data-speed="slow">
            <div className="scroller__inner">
                {sponsors.map((sponsor) => (
                    <img
                        key={sponsor.id}
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="scroller-item"
                    />
                ))}
            </div>
        </div>
    );
}
