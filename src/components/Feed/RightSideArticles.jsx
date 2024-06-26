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
      <Flex
        flexDir={{ xl: "column", lg: "column" }}
        alignItems={"center"}
        justifyContent="space-between"
        mb={8}
      >
        <Heading fontSize={20} mr={5} mb={{ base: 2.5 }}>
          Top Books
        </Heading>
        <SelectBookList />
      </Flex>
      <RightSideArticle />
    </Flex>
  );
};

export default RightSideArticles;
