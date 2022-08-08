import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import backImg from "../images/ellipse.png";

const Header = () => {
  return (
    <StyledHeader>
      <NavBar />
      <div className="header_text">
        <h2 className="header_text--title">
          Art of the pen at it's mightiest on the writers' block
        </h2>
        <p className="header_text--desc">
          Explore Millions of Writings, Articles, Stories, Essays, in one click!
          Helping african Writers have a voice and $funds
        </p>
      </div>
      <div className="header_image">
        <img
          className="header_image1"
          alt="header_image1"
          src={require("../images/headerimage1.png")}
        />
        <img
          className="header_image1"
          alt="header_image2"
          src={require("../images/headerimage2.png")}
        />
        <img
          className="header_image1"
          alt="header_image3"
          src={require ("../images/headerimage3.png")}
        />
      </div>
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  min-height: 50vh;
  background: var(--bgcolor) url(${backImg}) no-repeat right top;
  background-size: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  .header_text {
    max-width: 90%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    &--title {
      font-size: 28px;
      color: white;
      margin: 1rem 0;
    }
    &--desc {
      font-size: 14px;
      color: #f1f1f1;
    }
  }

  .header_image {
    /* .header_image3 */
    max-width: 60%;
  }
`;
