import { Flex } from "@chakra-ui/react";
import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <Flex as={"header"} flexDir={"column"} mx={{base:'5', md:'10'}}>
      <Flex
        align={"center"}
        justify={"space-between"}
        py={5}
        px={3}
        borderBottom={"1px solid lightGray"}
      >
        <TopHeader />
      </Flex>
      
      <Flex
        align={"center"}
        justify={"center"}
        py={3}
        borderBottom={"1px solid lightGray"}
      >
        <BottomHeader />
      </Flex>
    </Flex>
  );
};

export default Header;
