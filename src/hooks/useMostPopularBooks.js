import React, { useEffect, useState } from "react";
import { fetchMostPopularBooks } from "../services/api/apiRequest";

const useMostPopularBooks = (listName = 'hardcover-fiction') => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchMostPopularBooks(listName);
        setBooks(data.results.books);
        setLoading(false)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [listName]);
  return { books, loading, error };
};

export default useMostPopularBooks;
