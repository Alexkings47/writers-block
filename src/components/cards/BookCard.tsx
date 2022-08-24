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
    <StyledDiv>
      <img
        className="bookImg"
        src={require(`../../images/${imgUrl}`)}
        alt={title}
      />
      <div className="author-div">
        <img src={require(`../../images/${authorImg}`)} alt={"author"} />
        <small>{author}</small>
      </div>
      <div className="pages"> {pages}</div>
    </StyledDiv>
  );
};

export default BookCard;
const StyledDiv = styled.div`
  width: 40%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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

  @media (max-width: 850px) {
    padding: 5px;
    width: 45%;
    min-width: 12rem;
    margin-right: 1.5rem;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;
