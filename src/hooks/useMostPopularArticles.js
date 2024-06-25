import React, { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../services/api/apiRequest";

const useMostPopularArticles = (period = 1) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const data = await fetchMostPopularArticles(period);
        setArticles(data.results);
        setLoading(false)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getArticles();
  }, [period]);
  return { articles, loading, error };
};

export default useMostPopularArticles;
