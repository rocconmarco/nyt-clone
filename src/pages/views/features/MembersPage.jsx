import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import useSavedItemsStore from "../../../store/savedItemsStore";
import { auth, firestore } from "../../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Text,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";

const MembersPage = () => {
  const [loading, setLoading] = useState(true);
  const savedArticles = useSavedItemsStore((state) => state.savedArticles);
  const savedBooks = useSavedItemsStore((state) => state.savedBooks);
  const setSavedArticles = useSavedItemsStore(
    (state) => state.setSavedArticles
  );
  const setSavedBooks = useSavedItemsStore((state) => state.setSavedBooks);

  useEffect(() => {
    const loadSavedItems = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDocRef = doc(firestore, "users", user.uid);
        const docSnap = await getDoc(userDocRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setSavedArticles(data.savedArticles || []);
          setSavedBooks(data.savedBooks || []);
        }
        setLoading(false);
      }
    };
    loadSavedItems();
  }, [setSavedArticles, setSavedBooks]);

  if (loading) return <Spinner size="xl" />;

  return (
    <>
      <Header />

      <Flex
        mt={3}
        mb={8}
        minH={1000}
        gap={5}
        mx={{ base: "5", md: "10" }}
        flexDir={"column"}
      >
        <Heading as={"h1"}>My favorites</Heading>
        <Heading fontSize={"24px"} as={"h2"}>
          Articles
        </Heading>
        {savedArticles.length === 0 ? (
          <Text as="i">
            Still haven't found any interesting article? Go search for them in
            the homepage.
          </Text>
        ) : (
          <>
            {savedArticles.map((item) => (
              <Stack
                direction={{ base: "column", md: "row" }}
                borderWidth={"1px"}
                borderRadius={"lg"}
                maxW={{ base: "100vw", md: "70vw" }}
              >
                <Flex flexDir={{ base: "column", md: "row" }}>
                  <Box>
                    <Link href={item.url} target="_blank">
                      <Image
                        borderLeftRadius={"lg"}
                        borderRightRadius={{ base: "lg", md: "none" }}
                        borderBottomRadius={{ base: "none", md: "lg" }}
                        borderBottomEndRadius={{ base: "none", md: "none" }}
                        src={item.imageUrl}
                        alt={item.title}
                        w={{ base: "100vw", md: "35vw" }}
                      />
                    </Link>
                  </Box>
                  <Box
                    flex={1}
                    key={item.id}
                    mb={1}
                    p={3}
                    w={{ base: "100%", md: "50%" }}
                  >
                    <Link
                      href={item.url}
                      _hover={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <Heading size={"md"} _hover={{ color: "gray.600" }}>
                        {item.title}
                      </Heading>
                    </Link>
                    <Text>{item.description}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {item.author}
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            ))}
          </>
        )}

        <Heading fontSize={"24px"} as={"h2"}>
          Books
        </Heading>
        {savedBooks.length === 0 ? (
          <Text as="i">
            Still haven't found any interesting book? Go search for them in the
            homepage.
          </Text>
        ) : (
          <>
            {savedBooks.map((item) => (
              <Stack
                direction={{ base: "column", md: "row" }}
                borderWidth={"1px"}
                borderRadius={"lg"}
                maxW={{ base: "100vw", md: "60vw" }}
              >
                <Flex flexDir={{ base: "column", md: "row" }} maxH={"100%"}>
                  <Flex justifyContent={{ base: "center", md: "start" }}>
                    <Link href={item.bookUrl} target="_blank">
                      <Image
                        borderLeftRadius={{ base: "none", md: "lg" }}
                        h={{ base: "40vh", md: "50vh" }}
                        src={item.bookImage}
                        alt={item.title}
                      />
                    </Link>
                  </Flex>
                  <Box
                    flex={1}
                    key={item.id}
                    mb={1}
                    p={3}
                    w={{ base: "100%", md: "50%" }}
                  >
                    <Link
                      href={item.bookUrl}
                      _hover={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <Heading size={"md"} _hover={{ color: "gray.600" }}>
                        {item.title}
                      </Heading>
                    </Link>
                    <Text>{item.description}</Text>
                    <Text fontSize="sm" color="gray.500">
                      {item.contributor}
                    </Text>
                  </Box>
                </Flex>
              </Stack>
            ))}
          </>
        )}
      </Flex>
      <Footer />
    </>
  );
};

export default MembersPage;
