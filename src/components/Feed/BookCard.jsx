import React from "react";
import { Flex, Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import imageNotFound from "../../img/image-not-found.png";

const BookCard = ({
  title,
  bookImage,
  contributor,
  description,
  rank,
  bookUrl,
}) => {
  return (
    <Link href={bookUrl} _hover={{ textDecoration: "none" }} target="_blank">
      <Flex
        mb={5}
        paddingBottom={3}
        justify={"space-between"}
        borderBottom={"1px solid lightgray"}
      >
        <Box width="100%">
          <Flex justify={"center"} mb={5}>
            <Image 
              src={bookImage ? bookImage : imageNotFound} 
              h={"xs"} 
              objectFit="contain"
              alt={title}
            />
          </Flex>
          <Heading
            as={"h3"}
            size={{ base: "md", lg: "lg" }}
            _hover={{ color: "gray.600" }}
          >
            {rank}. {title}
          </Heading>
          {contributor && (
            <Text fontSize={{ base: "xs", lg: "sm" }} color={"gray"}>
              {contributor}
            </Text>
          )}
          {description && (
            <Text fontSize={{ base: "sm", lg: "md" }} mt={2}>
              {description}
            </Text>
          )}
        </Box>
      </Flex>
    </Link>
  );
};

export default BookCard;
