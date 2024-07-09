import { Container, Flex, VStack } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../../components/AuthForm/AuthForm";
import { Helmet } from "react-helmet-async";

const AuthPage = () => {
  return (
    <>
    <Helmet>
      <title>Authentication - The New York Clone</title>
    </Helmet>
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} py={10}>
      <Container maxW={"container.md"} padding={0}>
        <VStack spacing={4} alignItems={'stretch'}>
            <AuthForm />
        </VStack>
      </Container>
    </Flex>
    </>
    
  );
};

export default AuthPage;
