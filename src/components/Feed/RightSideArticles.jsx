import { Flex} from "@chakra-ui/react";
import React from "react";
import RightSideArticle from "./RightSideArticle";

const RightSideArticles = () => {
  return (
    <Flex flex={1} display={{base: 'none', md:'block'}} borderLeft={'1px solid lightgray'} pl={4}>
      <RightSideArticle />
      <RightSideArticle />
    </Flex>
  );
};

export default RightSideArticles;
