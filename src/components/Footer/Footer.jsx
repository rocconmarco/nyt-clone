import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Flex
        flexDir={"row"}
        backgroundColor={"black"}
        borderTopLeftRadius={20}
        borderTopRightRadius={20}
      >
        <Flex
          flex={1}
          pb={3}
          flexDir={"column"}
          align={"start"}
          gap={3}
          pl={5}
          pr={3}
        >
          <Text as={"b"} color={"white"} fontSize={28} mt={3}>
            The New York Clone
          </Text>
          <Text
            as={"em"}
            color={"white"}
            borderRight={"1px solid white"}
            pr={5}
          >
            DISCLAIMER: This website is not the official site of "The New York
            Times". It has been developed by Marco Roccon exclusively for
            educational purposes, as part of the React course within the Master
            in Blockchain Development.
          </Text>
          <Text color={"white"}>© 2024 Marco Roccon. All rights reserved.</Text>
        </Flex>
        <Flex flex={1} align={"center"} justify={"space-around"} display={{base: 'none', md: 'flex'}}>
          <Link href="https://github.com/rocconmarco" target="_blank">
            <FaGithub color="white" fontSize={35} />
          </Link>

          <Link href="https://www.instagram.com/marco_roccon/" target="_blank">
            <FaInstagram color="white" fontSize={35} />
          </Link>

          <Link href="https://www.linkedin.com/in/marcoroccon/" target="_blank">
            <FaLinkedin color="white" fontSize={35} />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
