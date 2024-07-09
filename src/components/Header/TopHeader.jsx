import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FaUser } from "react-icons/fa";
import logo from "../../img/nyt-logo.png";
import LeftSideDrawer from "./LeftSideDrawer";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const TopHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const authUser = useAuthStore((state) => state.user);
  return (
    <>
      <Flex width={"100%"} justify={"space-between"} align={"center"}>
        <Flex flex={1} justify={"flex-start"}>
          <LeftSideDrawer />
        </Flex>

        <Flex flex={1} justify={'center'}>
          <Image
            src={logo}
            h={{ base: "42px", md: "48px", lg: "76px" }}
            w="auto"
            objectFit="contain"
            cursor={"pointer"}
            onClick={
              location.pathname !== "/"
                ? () => navigate("/")
                : () => window.location.reload()
            }
          />
        </Flex>

        <Flex flex={1} justify={'flex-end'} alignItems={"center"} gap={1}>
          <Button
            variant={"link"}
            textDecoration={"none"}
            onClick={
              authUser ? () => navigate("/members") : () => navigate("/auth")
            }
          >
            <FaUser color="black" />
          </Button>
          <Text display={{ base: "none", md: "block" }}>
            {authUser ? `${authUser.firstName} ${authUser.lastName}` : null}
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default TopHeader;
