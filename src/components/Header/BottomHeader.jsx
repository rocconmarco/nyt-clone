import React from "react";
import TodayDate from "../Date/TodayDate";
import SelectArticleList from "./SelectArticleList";
import SelectBookList from "./SelectBookList";
import { Flex } from "@chakra-ui/react";

const BottomHeader = () => {
  return (
    <>
      
      <SelectArticleList />
      <TodayDate />
      <SelectBookList />
    </>
  );
};

export default BottomHeader;
