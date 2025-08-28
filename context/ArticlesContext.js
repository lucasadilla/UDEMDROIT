import { createContext, useContext, useEffect, useState } from 'react';

const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/articles');
        if (res.ok) {
          const data = await res.json();
          setArticles(data);
        }
      } catch (err) {
        console.error('Failed to load articles', err);
      }
    }
    load();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  return useContext(ArticlesContext);
}

