import { Flex} from "@chakra-ui/react";
import React from "react";

import LeftSideArticle from "./LeftSideArticle";

const LeftSideArticles = () => {
  return (
    <Flex flex={2} flexDir={'column'} mr={{base: 0, md: 4 }}>
      <LeftSideArticle />
    </Flex>
  );
};

export default LeftSideArticles;
