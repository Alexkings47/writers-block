import React from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  title: string;
  author: string;
  authorImg: string;
};

const BookCard = ({ imgUrl, title, author, authorImg }: Props) => {
  return (
    <StyledDiv
      imgUrl={imgUrl}
      //   style={{
      //     background: `url(${imgUrl}) no-repeat center/cover`,
      //   }}
    >
      {/* background image */}
      <img
        className="bookImg"
        src={require(`../../images/${imgUrl}.jpeg`)}
        alt={"title"}
      />
      <div className="book-top">
        <div className="author-div">
          <img src={require(`../../images/${authorImg}.png`)} alt={"author"} />
          <small>{author}</small>
        </div>
        <div className="pages"> pages</div>
      </div>
      <div className="book-bottom">{title}</div>
    </StyledDiv>
  );
};

export default BookCard;
const StyledDiv = styled.div<{ imgUrl: string }>`
  width: 40%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  height: 18rem;
  overflow: hidden;
  border-radius: 15px;
  z-index: 1;
  color: white;
  /* background: linear-gradient(#ffffff8b, #ffffff8b); */
  * {
    z-index: 5;
  }
  .bookImg {
    width: 100%;
    /* height: 100%; */
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(80%);
    z-index: 1;
  }
  .book-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .book-bottom {
    text-align: center;
    padding: 1rem;
    background: #ffffffa2;
    border-radius: 5px;
    filter: brightness(110%);
  }
  .pages {
    border-radius: 10px;
    width: 80px;
    padding: 6px 0;
    color: white;
    background-color: #fb6d3a;
  }
  .author-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
