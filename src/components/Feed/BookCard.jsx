import React from "react";
import { Flex, Box, Image, Text, Heading } from "@chakra-ui/react";

const BookCard = ({ key, title, bookImage, contributor, description }) => {
  return (
    <Flex
      mb={5}
      paddingBottom={3}
      justify={"space-between"}
      borderBottom={"1px solid lightgray"}
    >
      <Box key={key}>
        <Flex justify={'center'} mb={5}>
          <Image src={bookImage} h={"xs"} />
        </Flex>
        <Heading as={"h3"} size={{ base: "md", lg: "lg" }}>
          {title}
        </Heading>
        <Text fontSize={{ base: "xs", lg: "sm" }} color={"gray"}>
          {contributor}
        </Text>
        <Text fontSize={{ base: "sm", lg: "md" }}>{description}</Text>
        {/* <Text fontSize={"sm"} color={'gray'}>{contributor}</Text> */}
      </Box>
      {/* <Box maxW={"60%"}>
        
        
      </Box> */}
    </Flex>
  );
};

export default BookCard;
