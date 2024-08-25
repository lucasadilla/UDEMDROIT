// context/ArticlesContext.js
import { createContext, useState, useContext } from 'react';

const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'Elles Investies',
            image: '/images/article1.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '10 mars. 2024',
        },
        {
            id: 2,
            title: 'Journée internationale des droits de la femme',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '8 mars. 2024',
        },
        {
            id: 3,
            title: 'La marche annuelle commémorative pour les femmes autochtones disparues',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '15 févr. 2024',
        },
        {
            id: 4,
            title: 'Polytechnique, l’histoire d’un drame, mais aussi l’histoire de leurs vies',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '6 déc. 2023',
        },
        {
            id: 5,
            title: 'Journée internationale pour l\'élimination de la violence à l\'égard des femmes',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '25 nov. 2023',
        },
        {
            id: 6,
            title: '3 bonnes nouvelles pour le mouvement féministe',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '9 nov. 2023',
        },
        {
            id: 7,
            title: 'Le coût de la Guerre pour les femmes',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: '8 nov. 2023\n',
        },
        // Add more articles as needed
    ]);

    return (
        <ArticlesContext.Provider value={{ articles, setArticles }}>
            {children}
        </ArticlesContext.Provider>
    );
}

export function useArticles() {
    return useContext(ArticlesContext);
}