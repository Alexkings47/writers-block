import React from "react";
import styled from "styled-components";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Services from "../components/sections/Services";

const Home = () => {
  return (
    <StyledMain>
      <Header />
      <Services />
      <Footer />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main``;
