import React from "react";
import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

const ArticleCard = ({ article, imageUrl, imageCredits }) => {
  return (
    <Flex mb={5} paddingBottom={3} justify={'space-between'} borderBottom={"1px solid lightgray"}>
      <Box maxW={"40%"} key={article.id}>
        <Heading as={"h3"} size={{base: "md", lg:"lg"}}>
          {article.title}
        </Heading>
        <Text fontSize={{base:"sm", lg:"md"}}>{article.abstract}</Text>
        <Text fontSize={"sm"} color={'gray'}>{article.byline}</Text>
      </Box>
      <Box maxW={"60%"}>
        <Image src={imageUrl} />
        <Text textAlign={'end'} fontSize={{base:"xs", lg: "sm"}} color={'gray'}>{imageCredits}</Text>
      </Box>
    </Flex>
  );
};

export default ArticleCard;
