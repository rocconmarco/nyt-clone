import axios from "axios";

const API_KEY = "l9xuembTdp4ZyTwlIV3ML5cWqDzFAqzj";
const ARTICLES_BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/emailed/";
const BOOKS_BASE_URL ="https://api.nytimes.com/svc/books/v3/lists/current/";

export const fetchMostPopularArticles = async (period) => {
  try {
    const response = await axios.get(
      `${ARTICLES_BASE_URL}${period}.json?api-key=${API_KEY}`
    );
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchMostPopularBooks = async (listName) => {
  try {
    const response = await axios.get(
      `${BOOKS_BASE_URL}${listName}.json?api-key=${API_KEY}`
    );
    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }
    return response.data;
  } catch (error) {
    throw error;
  }
};
