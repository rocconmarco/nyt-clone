import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../img/nyt-logo.png";
import { FcGoogle } from "react-icons/fc";
import Login from "./Login";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate()

  return (
    <>
      <Box
        padding={5}
      >
        <VStack spacing={4}>
          <Image
            src={logo}
            h={{ base: 16, sm: 20, md: 24 }}
            alt="The New York Clone"
            cursor={'pointer'}
            onClick={() => navigate("/")}
          />
          {!isLogin ? (
            <Text as={"i"} w={"auto"} maxW={400} textAlign={"center"}>
              Like your favorite articles, save the best books and create your
              own collection of NYT content.
            </Text>
          ) : null}

          {isLogin ? <Login /> : <Signup />}
          
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={250}
          >
            <Box flex={2} h={"1px"} bg="black" />
            <Text mx={1} color={"black"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg="black" />
          </Flex>

          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>

      <Box
        padding={5}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box
            fontSize={15}
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
            _hover={{ color: "gray.500" }}
          >
            {isLogin
              ? "Don't have an account? Sign up"
              : "Already have an account? Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
