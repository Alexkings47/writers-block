import React from "react";
import styled from "styled-components";
import ServiceCard from "../cards/ServiceCard";

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

  .cards {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    row-gap: 2rem;
    justify-items: center;
  }
  .service-text{
    max-width: 88%;
    
  }
`;
