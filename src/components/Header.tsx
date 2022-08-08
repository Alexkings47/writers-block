import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import backImg from "../images/ellipse.png";



const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  height: 50vh;
  background: #0a2640 url(${backImg}) no-repeat right top;
  background-size: 8rem; 
`;
