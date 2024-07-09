import React from "react";
import Header from "../../../components/Header/Header";
import Feed from "../../../components/Feed/Feed";
import Footer from "../../../components/Footer/Footer";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home - The New York Clone</title>
      </Helmet>
      <Header />
      <Feed />
      <Footer />
    </>
  );
};

export default HomePage;
