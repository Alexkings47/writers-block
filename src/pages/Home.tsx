import React from "react";
import styled from "styled-components";
import AuthorCard from "../components/cards/AuthorCard";
import SearchBar from "../components/elements/SearchBar";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Services from "../components/sections/Services";

const Home = () => {
  // const myref = useRef<HTMLInputElement>(null);

  return (
    <StyledMain>
      <Header />
      <Services />
      <AuthorCard />
      <SearchBar
        buttonVal={"search"}
        chosenClass={"home-search"}
        inputVal={"author or article"}
        // ref={myref}
      />
      <Footer />
    </StyledMain>
  );
};

export default Home;
const StyledMain = styled.main`
  display: grid;
  grid-template-columns: 1;
`;
