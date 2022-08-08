import React from "react";
import styled from "styled-components";

const Button: React.FC<{ label: string , color: string}> = ({ label, color }) => {
  return <StyledButton  style={{backgroundColor: color}}>{label}</StyledButton>;
};

export default Button;
const StyledButton = styled.button`
border-radius: 10px;
width: 4rem;
color: black;
`;
