import React, { useEffect, useState } from "react";
import { Spinner, Alert, AlertIcon, Flex, Heading } from "@chakra-ui/react";
import imageNotFound from "../../img/image-not-found.png";
import useMostPopularArticles from "../../hooks/useMostPopularArticles";
import ArticleCard from "./ArticleCard";
import SelectArticleList from "./SelectArticleList";
import periodValues from "../../utils/periodValues";
import useSavedItemsStore from "../../store/savedItemsStore";

const LeftSideArticle = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periodValues[0]);
  const { articles, loading, error } = useMostPopularArticles(
    selectedPeriod.value
  );

  const savedArticles = useSavedItemsStore((state) => state.savedArticles)
  const loadSavedArticles = useSavedItemsStore((state) => state.loadSavedArticles)

  useEffect(() => {
    loadSavedArticles();
  }, []);

  const handlePeriodChange = (newPeriod) => {
    console.log("Changing period to:", newPeriod);
    setSelectedPeriod(newPeriod);
  };

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
      <Flex flexDir={"row"} alignItems={"center"} mb={8}>
        <Heading fontSize={20} mr={5}>
          Top Articles
        </Heading>
        <SelectArticleList
          selectedPeriod={selectedPeriod}
          onPeriodChange={handlePeriodChange}
        />
      </Flex>
      {articles.map((article) => {
        const imageUrl =
          article.media &&
          article.media[0] &&
          article.media[0]["media-metadata"] &&
          article.media[0]["media-metadata"][2]
            ? article.media[0]["media-metadata"][2].url
            : imageNotFound;

        const imageCredits =
          article.media && article.media[0] ? article.media[0].copyright : "";

        return (
          <ArticleCard
            key={article.id}
            article={article}
            articleUrl={article.url}
            imageUrl={imageUrl}
            imageCredits={imageCredits}
            savedArticles={savedArticles}
          />
        );
      })}
    </>
  );
};

export default LeftSideArticle;
