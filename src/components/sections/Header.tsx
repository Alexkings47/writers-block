import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import backImg from "../../images/ellipse.png";
import backImg1 from "../../images/ellipsedown.png";
import Button from "../elements/Button";

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
          src={require("../../images/headerimage1.png")}
        />
        <div className="header_image-bottom">
          <img
            className="header_image2"
            alt="header_image2"
            src={require("../../images/headerimage2.png")}
          />
          <img
            className="header_image3"
            alt="header_image3"
            src={require("../../images/headerimage3.png")}
          />
        </div>
      </div>
      <div className="button-div">
        <Button label="Writer" color="#69E6A6" />
        <Button label="Reader" color="white" />
      </div>
      <img
        className="sponsors"
        src={require("../../images/sponsors.png")}
        alt="sponsors"
      />
    </StyledHeader>
  );
};

export default Header;
const StyledHeader = styled.header`
  min-height: 100vh;
  background: url(${backImg1}) left bottom no-repeat,
    url(${backImg}) no-repeat right top;
  background-size: 12rem, 12rem;
  background-color: var(--bgcolor);
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
    padding: 2rem 0;

    &--title {
      font-size: 28px;
      color: white;
      margin-bottom: 1rem;
    }
    &--desc {
      font-size: 12px;
      color: #f1f1f1dd;
    }
  }

  .header_image {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .header_image-bottom {
      width: 100%;
      display: flex;
      align-content: center;
      justify-content: space-between;
    }
    &1 {
      width: 100%;
      margin-bottom: 1rem;
    }
    &2,
    &3 {
      width: 45%;
    }
  }
  .button-div {
    width: 12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }

  .sponsors {
    width: 100%;
    height: 3rem;
  }
`;
