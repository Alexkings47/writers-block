import React from "react";
import styled from "styled-components";

const Button: React.FC<{
  label: string;
  color?: string;
  chosenClass?: string;
}> = ({ label, color, chosenClass }) => {
  return (
    <StyledButton color={color} className={chosenClass}>
      {label}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  border-radius: 10px;
  min-width: 5rem;
  padding: 4px 3px;
  text-align: center;
  min-height: 1.5rem;
  border: 2px solid ${(props) => props.color};
  font-family: "Manrope";
  font-weight: 700;
  background-color: ${(prop) => (prop.color === "white" ? "" : prop.color)};
  color: ${(prop) => (prop.color === "white" ? "var(--lightgreen)" : "white")};

  &:focus {
    background-color: orangered;
  }
`;
