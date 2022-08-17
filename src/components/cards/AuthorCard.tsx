import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const AuthorCard = () => {
  return (
    <StyledDiv>
      <div className="author-details">
        <h2 className="section-title">Meet Afogu the story teller!</h2>
        <div className="author-details-bottom">
          <p className="section-desc">
            Jump start your book reading by quickly check through the popular
            book categories. 1000+ books are published by different authors
            everyday. Buy your favourite books on TreeBooks Today.
          </p>
          <div className="button-div">
            <Button
              label={"View his Books"}
              color={"white"}
              chosenClass={"block-btn"}
            />
            <Button
              label={"Publish a Book"}
              color={"green"}
              chosenClass={"block-btn"}
            />
          </div>
        </div>
      </div>
      <div className="author-image">
        <img src={require("../../images/x.jpg")} alt="author" />
      </div>
    </StyledDiv>
  );
};

export default AuthorCard;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .author-details {
    background-color: #161616;
    width: 100%;
    min-height: 15rem;
    padding: 10px;

    &-bottom {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 8rem;
    }
  }
  .section-desc {
    /* text-align: left; */
  }
  img {
    width: 100%;
  }
  .button-div {
    display: flex;
   
    justify-content: center;
    align-items: center;
    * {
      margin-right: 2rem;
    }

    .block-btn{
        border-radius: 0;
        background-color: transparent;
    }
  }
  
`;
