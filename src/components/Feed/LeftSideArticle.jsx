import React from 'react'
import { Flex, Box, Image, Text, Heading } from '@chakra-ui/react'
import article1 from "../../img/article1-img.webp";

const LeftSideArticle = () => {
  return (
    <Flex mb={5} paddingBottom={3} borderBottom={'1px solid lightgray'}>
        <Box maxW={'40%'}>
          <Heading as={"h3"} size={"lg"}>
            Questo è un titolo lungo
          </Heading>
          <Text fontSize={"md"}>
            Questo è l'abstract Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quos nesciunt neque possimus quaerat illum rerum
            ratione! Sunt cupiditate reiciendis quam impedit qui, inventore
            voluptatem iste enim sapiente rerum placeat quae.
          </Text>
          <Text fontSize={"sm"}>Questo è il tempo di lettura</Text>
        </Box>
        <Box maxW={'60%'}>
          <Image src={article1} />
          <Text fontSize={"sm"}>Questi sono i credits</Text>
        </Box>
      </Flex>
  )
}

export default LeftSideArticle
