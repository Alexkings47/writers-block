import React from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  title: string;
  author: string;
};

const LibraryCard = ({ imgUrl, title, author }: Props) => {
  return (
    <StyledDiv>
      <img
        src={require(`../../images/${imgUrl}`)}
        className="bookImg"
        alt={title}
      />
      <p>{author}</p>
      <p> {title}</p>
    </StyledDiv>
  );
};

export default LibraryCard;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: relative;
  height: 10rem;
  width: 5rem;
  
  .bookImg {
    width: 100%;
    /* height: 100%; */
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(80%);
    z-index: 1;
  }
`;
