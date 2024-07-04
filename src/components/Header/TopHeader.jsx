import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../../img/nyt-logo.png";
import LeftSideDrawer from "./LeftSideDrawer";

const TopHeader = () => {
  return (
    <>
      <LeftSideDrawer />
      <Image src={logo} h={{base: '42px', md:'48px', lg:'76px'}}></Image>
      <Button variant={'link'} textDecoration={'none'}>
        <FaUser color="black" />
      </Button>
    </>
  );
};

export default TopHeader;
