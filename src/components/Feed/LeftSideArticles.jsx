import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

import LeftSideArticle from "./LeftSideArticle";
import SelectArticleList from "./SelectArticleList";

const LeftSideArticles = () => {
  return (
    <>
      <Flex flex={2} flexDir={"column"} mr={{ base: 0, md: 4 }}>
        <Flex flexDir={"row"} alignItems={"center"} mb={8}>
          <Heading fontSize={20} mr={5}>
            Top Articles
          </Heading>
          <SelectArticleList />
        </Flex>
        <LeftSideArticle />
      </Flex>
    </>
  );
};

export default LeftSideArticles;
