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
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleAuth = () => {
    if (
      !inputs.firstName ||
      !inputs.lastName ||
      !inputs.email ||
      !inputs.password
    ) {
      alert("Please fill all the fields");
      return;
    }
    navigate("/members")
  };
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

          {!isLogin ? (
            <>
              <Box>
                <Text pb={1}>First name</Text>
                <Input
                  type="text"
                  fontSize={15}
                  w={350}
                  borderColor={"gray.400"}
                  _hover={{ borderColor: "gray.400" }}
                  value={inputs.firstName}
                  onChange={(e) =>
                    setInputs({ ...inputs, firstName: e.target.value })
                  }
                />
              </Box>
              <Box>
                <Text pb={1}>Last name</Text>
                <Input
                  type="text"
                  fontSize={15}
                  w={350}
                  borderColor={"gray.400"}
                  _hover={{ borderColor: "gray.400" }}
                  value={inputs.lastName}
                  onChange={(e) =>
                    setInputs({ ...inputs, lastName: e.target.value })
                  }
                />
              </Box>
            </>
          ) : null}
          <Box>
            <Text pb={1}>Email</Text>
            <Input
              type="email"
              fontSize={15}
              w={350}
              borderColor={"gray.400"}
              _hover={{ borderColor: "gray.400" }}
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </Box>
          <Box>
            <Text pb={1}>Password</Text>
            <Input
              type="password"
              fontSize={15}
              w={350}
              borderColor={"gray.400"}
              _hover={{ borderColor: "gray.400" }}
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </Box>
          <Button
            w={350}
            color="white"
            bg={"black"}
            _hover={{ bg: "black" }}
            _active={{ bg: "gray" }}
            onClick={handleAuth}
          >
            {!isLogin ? "Sign up" : "Log in"}
          </Button>
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

          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            cursor={"pointer"}
          >
            <FcGoogle fontSize={25} />
            <Text mx={2}>{!isLogin ? "Sign up" : "Log in"} with Google</Text>
          </Flex>
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
