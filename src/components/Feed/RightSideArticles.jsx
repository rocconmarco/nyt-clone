import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import RightSideArticle from "./RightSideArticle";
import SelectBookList from "./SelectBookList";

const RightSideArticles = () => {
  return (
    <Flex
      flex={1}
      display={{ base: "none", lg: "block" }}
      borderLeft={"1px solid lightgray"}
      pl={4}
    >
      <RightSideArticle />
    </Flex>
  );
};

export default RightSideArticles;
