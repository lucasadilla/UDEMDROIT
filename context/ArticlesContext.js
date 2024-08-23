// context/ArticlesContext.js
import { createContext, useState, useContext } from 'react';

const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: 'First Article',
            image: '/images/article1.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: 'January 1, 2023',
        },
        {
            id: 2,
            title: 'Second Article',
            image: '/images/article2.jpg',
            author: 'Élie Legault',
            authorImage: '/images/bbg.jpeg',
            date: 'February 15, 2023',
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