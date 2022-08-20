import React from "react";
import styled from "styled-components";

type Props = {
    imgUrl: string;
    title: string;
}

const BookCard = ({imgUrl, title}: Props) => {
  return (
    <StyledDiv>
      <img className="bookImg" src={require (`../../images/${imgUrl}.png`)} alt={"title"} />
    </StyledDiv>
  );
};

export default BookCard;
const StyledDiv = styled.div`
    width: 40%;
    .bookImg {
      width: 99%;
    }
  
`;
