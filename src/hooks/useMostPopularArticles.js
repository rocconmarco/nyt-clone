import React, { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../services/api/apiRequest";

const useMostPopularArticles = (initialPeriod = 1) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchMostPopularArticles(initialPeriod);
        setArticles(data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [initialPeriod]);

  return { articles, loading, error };
};

export default useMostPopularArticles;

