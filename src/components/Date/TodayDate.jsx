import { Text } from "@chakra-ui/react";
import React from "react";

const TodayDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  return <Text fontSize={{base: '14px', md:'16px'}}>{formattedDate}</Text>;
};

export default TodayDate;