import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
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
      
      <Flex mt={3} gap={5} mx={{base:'5', md:'10'}} flexDir={'column'}>
      <Heading as={"h1"}>My favorites</Heading>
        <Heading fontSize={'24px'} as={"h2"}>Articles</Heading>
        {savedArticles.map((item) => (
          <Box flex={1}
            key={item.id}
            mb={5}
            p={3}
            borderWidth={"1px"}
            borderRadius={"lg"}
          >
            <Link href={item.url}>
              <Heading size={"md"}>{item.title}</Heading>
            </Link>
            <Text>{item.description}</Text>
            <Text fontSize="sm" color="gray.500">
              {item.author}
            </Text>
            <Link href={item.url}>
              <Image src={item.imageUrl} alt={item.title} />
            </Link>
          </Box>
        ))}
        <Heading fontSize={'24px'} as={"h2"}>Books</Heading>
        {savedBooks.map((item) => (
          <Box flex={1}
            key={item.id}
            mb={5}
            p={3}
            borderWidth={"1px"}
            borderRadius={"lg"}
          >
            <Link href={item.url}>
              <Heading size={"md"}>{item.title}</Heading>
            </Link>
            <Text>{item.description}</Text>
            <Text fontSize="sm" color="gray.500">
              {item.contributor}
            </Text>
            <Link href={item.url}>
              <Image src={item.bookImage} alt={item.title} />
            </Link>
          </Box>
        ))}
      </Flex>
    </>
  );
};

export default MembersPage;
