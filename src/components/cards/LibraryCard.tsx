import React from "react";
import styled from "styled-components";

type Props = {
  imgUrl: string;
  title: string;
  author: string;
};

const LibraryCard = ({ imgUrl, title  }: Props) => {
  return (
    <StyledDiv>
      <img
        src={require(`../../images/${imgUrl}`)}
        className="bookImg"
        alt={title}
      />
     
    </StyledDiv>
  );
};

export default LibraryCard;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  color: white;
  position: relative;
  width: 7rem;
  overflow: hidden;
  height: 100%;

  .bookImg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(60%);
  }
  .bookImg:hover {
    filter: brightness(100%);
    transform: scale(1.01);
  }
`;
