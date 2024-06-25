import { Flex } from "@chakra-ui/react";
import React from "react";
import LeftSideArticles from "./LeftSideArticles";
import RightSideArticles from "./RightSideArticles";

const Feed = () => {
  return (
    <Flex mx={{ base: "5", md: "10" }} pt={5}>
      <LeftSideArticles />
      <RightSideArticles />
    </Flex>
  );
};

export default Feed;
