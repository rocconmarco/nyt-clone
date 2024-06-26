import React from 'react'
import { Spinner, Alert, AlertIcon } from '@chakra-ui/react'

import BookCard from './BookCard';
import useMostPopularBooks from '../../hooks/useMostPopularBooks';

const RightSideArticle = () => {
  const { books, loading, error } = useMostPopularBooks('combined-print-and-e-book-fiction');
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
            bookUrl={book.amazon_product_url}
            contributor={book.contributor}
            rank={book.rank}
          />
        );
      })}
    </>
  );
};

export default RightSideArticle;