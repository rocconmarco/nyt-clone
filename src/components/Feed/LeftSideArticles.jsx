import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

import LeftSideArticle from "./LeftSideArticle";
import SelectArticleList from "./SelectArticleList";

const LeftSideArticles = () => {
  return (
    <>
      <Flex flex={2} flexDir={"column"} mr={{ base: 0, md: 4 }} minH={1000}>
       
        <LeftSideArticle />
      </Flex>
    </>
  );
};

export default LeftSideArticles;
