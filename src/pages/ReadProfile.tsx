import React, {useState} from "react";
import styled from "styled-components";
import Dashboard from "../components/sections/Dashboard";
import MyBooks from "../components/sections/MyBooks";

const ReadProfile: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);


  return (
    <StyledMain>
      <Dashboard menu={menu} setMenu={setMenu} />
      <MyBooks menu={menu} setMenu={setMenu} />
    </StyledMain>
  );
};

export default ReadProfile;
const StyledMain = styled.main`
  background: #503e9d;
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  padding: 1rem;
  justify-content: space-between;
 
`;
