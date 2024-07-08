import React from "react";
import { Flex, Box, Image, Text, Heading, Link, Stack, Button } from "@chakra-ui/react";
import { auth, firestore } from '../../firebase/firebase';
import { FaRegStar } from "react-icons/fa";
import useSavedItemsStore from "../../store/savedItemsStore";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

const ArticleCard = ({ article, imageUrl, imageCredits }) => {
  const addSavedArticle = useSavedItemsStore((state) => state.addSavedArticle)

  const handleSave = async (e) => {
    e.preventDefault()
    const user = auth.currentUser
    if(user) {
      const newArticle = {
        id:nanoid(),
        title:article.title,
        description:article.abstract,
        author:article.byline,
        imageUrl:imageUrl,
        url:article.url
      }
      addSavedArticle(newArticle)

      const userDocRef = doc(firestore, "users", user.uid)
      await updateDoc(userDocRef, {
        savedArticles: arrayUnion(newArticle)
      })
    }
  }

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      mb={5}
      paddingBottom={3}
      borderBottom={"1px solid lightgray"}
    >
      <Box
        w={{ base: "100%", md: "40%" }}
        key={article.id}
        order={{ base: 2, md: 1 }}
      >
        <Link
          href={article.url}
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Heading
            as={"h3"}
            size={{ base: "md", md: "lg" }}
            _hover={{ color: "gray.600" }}
          >
            {article.title}
          </Heading>
        </Link>
        <Text fontSize={{ base: "md" }} mt={2}>
          {article.abstract}
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          {article.byline}
        </Text>
        <Box onClick={handleSave} cursor={'pointer'} mt={2}><FaRegStar fontSize={'20px'} /></Box>
      </Box>
      <Flex
        w={{ base: "100%", md: "60%" }}
        ml={{ base: 0, md: 5 }}
        flexDir={"column"}
        order={{ base: 1, md: 2 }}
      >
        <Link
          href={article.url}
          _hover={{ textDecoration: "none" }}
          target="_blank"
        >
          <Image src={imageUrl} alignSelf={"end"} w={"100%"} />
        </Link>
        <Text textAlign={"end"} fontSize={{ base: "sm" }} color={"gray"} mt={2}>
          {imageCredits}
        </Text>
      </Flex>
      
    </Stack>
  );
};

export default ArticleCard;
