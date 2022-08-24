import React from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  title: string;
  author: string;
  authorImg: string;
  pages: string;
};

const BookCard = ({ imgUrl, title, author, authorImg, pages }: Props) => {
  return (
    <StyledDiv >
      <img
        className="bookImg"
        src={require(`../../images/${imgUrl}`)}
        alt={title}
      />
      <div className="book-top">
        <div className="author-div">
          <img src={require(`../../images/${authorImg}`)} alt={"author"} />
          <small>{author}</small>
        </div>
        <div className="pages"> {pages}</div>
      </div>
    </StyledDiv>
  );
};

export default BookCard;
const StyledDiv = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem;
  height: 18rem;
  overflow: hidden;
  border-radius: 15px;
  z-index: 1;
  color: white;

  * {
    z-index: 5;
  }
  .bookImg {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(80%);
    z-index: 1;
  }

  .bookImg:hover {
    filter: brightness(100%);
    transform: scale(1.01);
  }
  .book-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .pages {
    border-radius: 10px;
    width: 80px;
    font-size: 12px;
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
