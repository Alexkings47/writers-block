import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
  imgUrl: string;
  desc: string;
};

const ServiceCard = ({ title, imgUrl, desc }: Props) => {
  return (
    <StyledDiv>
      <img src={require(`../../images/${imgUrl}`)} alt={title} />
      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p className="sub-text">{desc}</p>
      </div>
    </StyledDiv>
  );
};

export default ServiceCard;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  min-height: 22rem;
  max-width: 100%;
  /* text-align: left; */
  position: relative;

  /* .card-text {
    max-width: 350px;
  } */
  .card-title {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: #f90d6f;
  }
  img {
    max-width: 220px;
    height: 293px;
    margin-bottom: 10px;
  }
`;
