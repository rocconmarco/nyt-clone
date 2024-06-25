import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";
import logo from "../../img/nyt-logo.png";

const TopHeader = () => {
  return (
    <>
      <Button variant={"ghost"}>
        <GiHamburgerMenu />
      </Button>
      <Image src={logo} h={{base: '32px', md:'38px', lg:'66px'}}></Image>
      <Button variant={'link'} textDecoration={'none'}>
        <FaUser color="black" />
      </Button>
    </>
  );
};

export default TopHeader;
