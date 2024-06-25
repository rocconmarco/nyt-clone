import React from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  Heading,
  Spinner,
  Alert,
  AlertIcon,
  Container,
} from "@chakra-ui/react";
import imageNotFound from "../../img/image-not-found.png";
import useMostPopularArticles from "../../hooks/useMostPopularArticles";
import ArticleCard from "./ArticleCard";

const LeftSideArticle = () => {
  const { articles, loading, error } = useMostPopularArticles(1);
  if (loading) return <Spinner size="xl" />;
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        {error.message}
      </Alert>
    );

  return (
    <>
      {articles.map((article) => {
        const imageUrl =
          article.media &&
          article.media[0] &&
          article.media[0]["media-metadata"] &&
          article.media[0]["media-metadata"][2]
            ? article.media[0]["media-metadata"][2].url
            : imageNotFound;

        const imageCredits =
          article.media && article.media[0]
            ? article.media[0].copyright
            : '';

        return (
          <ArticleCard
            key={article.id}
            article={article}
            imageUrl={imageUrl}
            imageCredits={imageCredits}
          />
        );
      })}
    </>
  );
};

export default LeftSideArticle;
