import React from 'react'
import { Spinner, Alert, AlertIcon } from '@chakra-ui/react'
import article2 from "../../img/article2-img.webp";
import BookCard from './BookCard';
import useMostPopularBooks from '../../hooks/useMostPopularBooks';

const RightSideArticle = () => {
  const { books, loading, error } = useMostPopularBooks('hardcover-fiction');
  if (loading) return <Spinner size="xl" />;
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );

  return (
    <>
      {books.map((book) => {
        return (
          <BookCard
            key={book.primary_isbn13}
            title={book.title}
            description={book.description}
            bookImage={book.book_image}
            contributor={book.contributor}
          />
        );
      })}
    </>
  );
};

export default RightSideArticle;