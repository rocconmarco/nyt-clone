import React from 'react'
import { Flex, Box, Image, Text, Heading } from '@chakra-ui/react'
import article2 from "../../img/article2-img.webp";

const RightSideArticle = () => {
  return (
    <Flex mb={5} flexDir={"column"} paddingBottom={3} borderBottom={'1px solid lightgray'}>
        <Box>
          <Image src={article2} />
          <Text fontSize={"sm"}>Questi sono i credits</Text>
        </Box>
        <Box>
          <Heading as={"h3"} size={"lg"}>
            Questo è un titolo
          </Heading>
          <Text fontSize={"md"}>Questo è l'abstract</Text>
          <Text fontSize={"sm"}>Questo è il tempo di lettura</Text>
        </Box>
      </Flex>
  )
}

export default RightSideArticle
