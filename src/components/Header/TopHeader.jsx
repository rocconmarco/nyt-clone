import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../../img/nyt-logo.png";
import LeftSideDrawer from "./LeftSideDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const TopHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const authUser = useAuthStore((state) => state.user);
  return (
    <>
      <LeftSideDrawer />
      <Image src={logo} h={{base: '42px', md:'48px', lg:'76px'}} cursor={'pointer'} 
      onClick={location.pathname !== "/" ? () => navigate("/") : () => window.location.reload()}></Image>
      <Flex flexDir={'column'} alignItems={'center'} gap={1}>
      <Button variant={'link'} textDecoration={'none'} onClick={authUser ? () => navigate("/members") : () => navigate("/auth") }>
        <FaUser color="black" />
      </Button>
      <Text>{authUser ? `${authUser.firstName} ${authUser.lastName}` : null}</Text>
      </Flex>
      
    </>
  );
};

export default TopHeader;
