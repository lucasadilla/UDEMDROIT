import { createContext, useContext, useEffect, useState } from 'react';

const ArticlesContext = createContext();

export function ArticlesProvider({ children }) {
  const [articles, setArticles] = useState([]);

  const refreshArticles = async () => {
    try {
      const res = await fetch('/api/articles');
      if (res.ok) {
        const data = await res.json();
        setArticles(data);
      }
    } catch (err) {
      console.error('Failed to load articles', err);
    }
  };

  useEffect(() => {
    refreshArticles();
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, refreshArticles, setArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  return useContext(ArticlesContext);
}

