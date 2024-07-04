import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleAuth = () => {
  return (
    <>
      <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
        <FcGoogle fontSize={25} />
        <Text mx={2}>Log in with Google</Text>
      </Flex>
    </>
  );
};

export default GoogleAuth;
