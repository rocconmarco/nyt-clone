import React from "react";
import { Flex, Box, Image, Text, Heading, Link } from "@chakra-ui/react";

const ArticleCard = ({ article, imageUrl, imageCredits }) => {
  return (
    <Link href={article.url} _hover={ {textDecoration: "none"} }>
      <Flex
        mb={5}
        paddingBottom={3}
        justify={"space-between"}
        borderBottom={"1px solid lightgray"}
      >
        <Box maxW={"40%"} key={article.id}>
          <Heading
            as={"h3"}
            size={{ base: "md", lg: "lg" }}
            _hover={{ color: "gray.600" }}
          >
            {article.title}
          </Heading>
          <Text fontSize={{ base: "sm", lg: "md" }} mt={2}>
            {article.abstract}
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            {article.byline}
          </Text>
        </Box>
        <Box maxW={"60%"} ml={5}>
          <Image src={imageUrl} />
          <Text
            textAlign={"end"}
            fontSize={{ base: "xs", lg: "sm" }}
            color={"gray"}
            mt={2}
          >
            {imageCredits}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default ArticleCard;
