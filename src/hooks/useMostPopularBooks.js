import React, { useEffect, useState } from "react";
import { fetchMostPopularBooks } from "../services/api/apiRequest";

const useMostPopularBooks = () => {
  const [listName, setListName] = useState('hardcover-fiction')
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
    console.log(books)
  }, [listName]);

  const handleListNameChange = (newListName) => {
    setListName(newListName);
  };

  return { listName, setListName, books, loading, error, handleListNameChange };
};

export default useMostPopularBooks;
