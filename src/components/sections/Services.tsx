import React from "react";
import styled from "styled-components";
import ServiceCard from "../cards/ServiceCard";
import img1 from "../../images/pharoah.png";
import img2 from "../../images/benin.png";

const Services = () => {
  return (
    <StyledDiv>
      <div className="service-text">
        <h2 className="section-heading">
          We open you to a pool of possibilities
        </h2>
        <p className="sub-text">
          Erase completely the stress and uncertainty of looking endlessly for
          quality articles and stories on an topic you desire. Writer's block is
          hair to here to show you the way of the writer.
        </p>
      </div>
      <div className="cards">
        <ServiceCard
          title={"Essays"}
          imgUrl={"product.png"}
          desc={
            "Are one off gigs your preference? Talentco helps you find freelance jobs of your choice"
          }
        />
        <ServiceCard
          title={"Short Stories"}
          imgUrl={"product.png"}
          desc={
            "Are one off gigs your preference? Talentco helps you find freelance jobs of your choice"
          }
        />
        <ServiceCard
          title={"Poems"}
          imgUrl={"product.png"}
          desc={
            "Are one off gigs your preference? Talentco helps you find freelance jobs of your choice"
          }
        />
        <ServiceCard
          title={"Novels"}
          imgUrl={"product.png"}
          desc={
            "Are one off gigs your preference? Talentco helps you find freelance jobs of your choice"
          }
        />
      </div>
    </StyledDiv>
  );
};

export default Services;
const StyledDiv = styled.section`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#ffffffdf, #ffffffdf), url(${img1}) no-repeat,
    url(${img2}) no-repeat;
  background-size: 10rem, 10rem;
  background-position: 50% top, 50% bottom;
  width: 100%;

  .cards {
    padding: 2rem 1rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
    column-gap: 1rem;
    justify-items: center;
  }
  .service-text {
    max-width: 88%;
  }

 
`;
