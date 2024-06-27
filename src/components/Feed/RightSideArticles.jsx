import { Flex } from "@chakra-ui/react";
import React from "react";
import RightSideArticle from "./RightSideArticle";

const RightSideArticles = () => {
  return (
    <Flex
      flex={1}
      display={{ base: "none", lg: "block" }}
      borderLeft={"1px solid lightgray"}
      pl={4}
      minH={1000}
    >
      <RightSideArticle />
    </Flex>
  );
};

export default RightSideArticles;
