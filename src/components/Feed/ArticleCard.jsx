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
            size={{ base: "md", md: "lg" }}
            _hover={{ color: "gray.600" }}
          >
            {article.title}
          </Heading>
          <Text fontSize={{base: 'md'}} mt={2}>
            {article.abstract}
          </Text>
          <Text fontSize={"sm"} color={"gray"}>
            {article.byline}
          </Text>
        </Box>
        <Flex maxW={"60%"} ml={5} flexDir={'column'}>
          <Image src={imageUrl} alignSelf={'end'} w={500} />
          <Text
            textAlign={"end"}
            fontSize={{ base: "sm"}}
            color={"gray"}
            mt={2}
          >
            {imageCredits}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
};

export default ArticleCard;
