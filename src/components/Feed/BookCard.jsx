import React from "react";
import { Flex, Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import imageNotFound from "../../img/image-not-found.png";
import { FaRegStar } from "react-icons/fa";
import useSavedItemsStore from "../../store/savedItemsStore";
import { auth, firestore } from "../../firebase/firebase";
import { nanoid } from "nanoid";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const BookCard = ({
  title,
  bookImage,
  contributor,
  description,
  rank,
  bookUrl,
}) => {

  const addSavedBook = useSavedItemsStore((state) => state.addSavedBook)

  const handleSave = async (e) => {
    e.preventDefault()
    const user = auth.currentUser
    if(user) {
      const newBook = {
        id:nanoid(),
        title: title,
        description: description,
        bookImage: bookImage,
        contributor: contributor,
        bookUrl: bookUrl
      }
      addSavedBook(newBook)

      const userDocRef = doc(firestore, "users", user.uid)
      await updateDoc(userDocRef, {
        savedBooks: arrayUnion(newBook)
      })
    }
  }

  return (
    <Flex
      mb={5}
      paddingBottom={3}
      justify={"space-between"}
      borderBottom={"1px solid lightgray"}
    >
      <Box width="100%">
        <Flex justify={"center"} mb={5}>
          <Link
            href={bookUrl}
            _hover={{ textDecoration: "none" }}
            target="_blank"
          >
            <Image
              src={bookImage ? bookImage : imageNotFound}
              h={"xs"}
              objectFit="contain"
              alt={title}
            />
          </Link>
        </Flex>

        <Flex justify={"space-between"}>
          <Link
            href={bookUrl}
            _hover={{ textDecoration: "none" }}
            target="_blank"
          >
            <Heading
              as={"h3"}
              size={{ base: "md", lg: "lg" }}
              _hover={{ color: "gray.600" }}
            >
              {rank}. {title}
            </Heading>
          </Link>
          <Box onClick={handleSave} cursor={'pointer'} ml={2} mt={2}>
            <FaRegStar fontSize={"20px"} />
          </Box>
        </Flex>

        {contributor && (
          <Text fontSize={{ base: "xs", lg: "sm" }} color={"gray"}>
            {contributor}
          </Text>
        )}
        {description && (
          <Text fontSize={{ base: "sm", lg: "md" }} mt={2}>
            {description}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default BookCard;
