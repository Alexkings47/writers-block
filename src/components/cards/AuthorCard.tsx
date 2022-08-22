import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const AuthorCard = () => {
  return (
    <StyledDiv>
      <div className="author-details">
        <h2 className="section-title">Meet Afogu the story teller!</h2>

        <p className="section-desc">
          Jump start your book reading by quickly check through the popular book
          categories. 1000+ books are published by different authors everyday.
          Buy your favourite books on TreeBooks Today.
        </p>
        <div className="button-div">
          <Button
            label={"View his Books"}
            color={"white"}
            chosenClass={"block-btn"}
          />
          <Button
            label={"Publish a Book"}
            color={"var(--lightgreen)"}
            chosenClass={"block-btn"}
          />
        </div>
      </div>
      <div className="author-image">
        <img src={require("../../images/storm.jpeg")} alt="author" />
      </div>
    </StyledDiv>
  );
};

export default AuthorCard;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  margin-bottom: 3rem;
  height: 40rem;

  .author-details {
    background-color: #161616;
    height: 50%;
    padding: 2rem 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .section-title {
    color: #fff;
    text-shadow: 2px 8px 8px #f90d6f;
  }
  .author-image {
    height: 50%;
  }
  img {
    width: 100%;

    object-fit: cover;
  }
  .button-div {
    display: flex;
    justify-content: center;
    align-items: center;

    *:first-child {
      margin-right: 2rem;
    }

    .block-btn {
      border-radius: 0;
    }
  }
  @media (min-width: 600px) {
    flex-direction: row;
    height: 25rem;

    .author-details,
    .author-image {
      width: 50%;
      align-items: flex-start;
      text-align: left;
      height: 100%;

      &-bottom {
        align-items: flex-start;
      }
    }
  }
`;
