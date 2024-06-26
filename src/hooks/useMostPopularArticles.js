import React, { useEffect, useState } from "react";
import { fetchMostPopularArticles } from "../services/api/apiRequest";

const useMostPopularArticles = () => {
  const [period, setPeriod] = useState(1)
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
    console.log(articles)
  }, [period]);

  const handlePeriodChange = (newPeriod) => {
    setPeriod(newPeriod);
  };

  return { period, setPeriod, articles, loading, error, handlePeriodChange };
};

export default useMostPopularArticles;
