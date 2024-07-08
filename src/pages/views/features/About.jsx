import React from "react";
import Header from "../../../components/Header/Header";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Footer from "../../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Header />
      <Flex flexDir={"column"} mt={3} mx={{ base: "5", md: "10" }}>
        <Heading as={"h1"}>About</Heading>
        <Flex gap={5} flexDir={'column'} mx={{ base: "5", md: "10", lg: "20" }} my={10}>
          <Text>
            The New York Clone, as the name suggests, is a clone website of the
            popular newspaper “The New York Times”. The website has been created
            as part of the React course within the Master in Blockchain
            Development provided by start2impact university.
          </Text>
          <Text>
            The main purpose of this website is to demonstrate the skills I have
            acquired during this course. I learned how to properly integrate
            external APIs in a React project. In order to add more pages to my
            SPA (Single Page Application), I also decided to implement the
            authentication feature with a reserved area for the user, as well as
            providing the opportunity to saved articles and books the user
            liked, for future reference and consultation.
          </Text>
          <Text>
            The authentication feature has been implemented via firebase, the
            renowned BaaS (Back-end as a Service) freely provided by Google. The
            global state is maintained by Zustand, so that the user interface
            remain coherent for logged-in users, and differs from the public
            version of the website for non-authenticated users.
          </Text>
          <Text>
            Feel free to explore the website, to acquire prime quality knowledge
            provided by the NYT and to contact me through my social media
            channels at the bottom of the page.
          </Text>
          <Text>© 2024 Marco Roccon. All rights reserved.</Text>
        </Flex>
      </Flex>
      <Footer />
    </>
  );
};

export default About;
