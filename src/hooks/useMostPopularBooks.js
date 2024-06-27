import { useEffect, useState } from "react";
import { fetchMostPopularBooks } from "../services/api/apiRequest";

const useMostPopularBooks = (initialBookList = 'combined-print-and-e-book-fiction') => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBooks = async () => {
      setLoading(true);
      try {
        const data = await fetchMostPopularBooks(initialBookList);
        setBooks(data.results.books);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [initialBookList]);

  return { books, loading, error };
};

export default useMostPopularBooks;