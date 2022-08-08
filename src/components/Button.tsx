import React from "react";
import styled from "styled-components";

const Button: React.FC<{ label: string; color: string }> = ({
  label,
  color,
}) => {
  return (
    <StyledButton
      style={{
        backgroundColor: color === "white" ? "" : color,
        color: color === "white" ? "white" : "#0A2640",
      }}
      color={color}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
const StyledButton = styled.button`
  border-radius: 10px;
  width: 5rem;
  text-align: center;
  height: 1.5rem;
  border: 2px solid ${(props) => props.color};
  font-family: "Neucha";
  font-weight: 700;

  &:focus {
    background-color: red;
  }
`;
