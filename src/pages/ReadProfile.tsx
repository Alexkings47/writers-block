import React from "react";
import styled from "styled-components";
import Dashboard from "../components/sections/Dashboard";
import MyBooks from "../components/sections/MyBooks";

const ReadProfile: React.FC = () => {
  return (
    <StyledMain>
      <Dashboard />
      <MyBooks />
    </StyledMain>
  );
};

export default ReadProfile;
const StyledMain = styled.main`
  background: #503e9d;
  height: 100vh;
  display: flex;
  padding: 1rem;
  justify-content: space-between;

 
`;
