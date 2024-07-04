import { Button, Image } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../../img/nyt-logo.png";
import LeftSideDrawer from "./LeftSideDrawer";
import { useLocation, useNavigate } from "react-router-dom";

const TopHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <>
      <LeftSideDrawer />
      <Image src={logo} h={{base: '42px', md:'48px', lg:'76px'}} cursor={'pointer'} 
      onClick={location.pathname !== "/" ? () => navigate("/") : () => window.location.reload()}></Image>
      <Button variant={'link'} textDecoration={'none'}>
        <FaUser color="black" />
      </Button>
    </>
  );
};

export default TopHeader;
