import React from "react";
import { Flex, Box, Image, Text, Heading, Link, Stack } from "@chakra-ui/react";

const ArticleCard = ({ article, imageUrl, imageCredits }) => {
  return (
    <Link
      href={article.url}
      _hover={{ textDecoration: "none" }}
      target="_blank"
    >
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
          <Heading
            as={"h3"}
            size={{ base: "md", md: "lg" }}
            _hover={{ color: "gray.600" }}
          >
            {article.title}
          </Heading>
          <Text fontSize={{ base: "md" }} mt={2}>
            {article.abstract}
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            {article.byline}
          </Text>
        </Box>
        <Flex
          w={{ base: "100%", md: "60%" }}
          ml={{base: 0, md: 5}}
          flexDir={"column"}
          order={{ base: 1, md: 2 }}
        >
          <Image src={imageUrl} alignSelf={"end"} w={"100%"} />
          <Text
            textAlign={"end"}
            fontSize={{ base: "sm" }}
            color={"gray"}
            mt={2}
          >
            {imageCredits}
          </Text>
        </Flex>
      </Stack>
    </Link>
  );
};

export default ArticleCard;
