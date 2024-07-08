import React, { useEffect, useState } from "react";
import {
  Spinner,
  Alert,
  AlertIcon,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import BookCard from "./BookCard";
import useMostPopularBooks from "../../hooks/useMostPopularBooks";
import bookListValues from "../../utils/bookListValues";
import SelectBookList from "./SelectBookList";
import useSavedItemsStore from "../../store/savedItemsStore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase";

const RightSideArticle = () => {
  const [selectedBookList, setSelectedBookList] = useState(bookListValues[0]);
  const { books, loading, error } = useMostPopularBooks(selectedBookList.value);

  const savedBooks = useSavedItemsStore((state) => state.savedBooks)
  const loadSavedBooks = useSavedItemsStore((state) => state.loadSavedBooks)

  const [user] = useAuthState(auth)

  useEffect(() => {
    if(user) {
      loadSavedBooks()
    }
    
  }, [user, loadSavedBooks])

  const handleBookListChange = (newBookList) => {
    setSelectedBookList(newBookList);
  };

  if (loading) return <Spinner size="xl" />;
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );

  return (
    <VStack spacing={4} align="stretch">
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent="space-between"
        mb={8}
      >
        <Heading fontSize={20} mr={5} mb={{ base: 2.5 }}>
          Top Books
        </Heading>
        <SelectBookList
          selectedBookList={selectedBookList}
          onBookListChange={handleBookListChange}
        />
      </Flex>
      {books.map((book) => (
        <BookCard
          key={book.primary_isbn13}
          title={book.title}
          description={book.description || "No description available"}
          bookImage={book.book_image}
          bookUrl={book.amazon_product_url}
          contributor={book.contributor}
          rank={book.rank}
          savedBooks={savedBooks}
        />
      ))}
    </VStack>
  );
};

export default RightSideArticle;
