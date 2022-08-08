import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  /* display: ${(props) => (props.menu ? "flex" : "none")} */
  function showMenu() {
    setMenu(!menu);
  }

  return (
    <StyledNav>
      <div className="logo_div">
        <img
          className="logo"
          src={require("../images/favicon.jpg")}
          alt="logo"
        />
        <p className="title">Writer's Block</p>
      </div>
      <button className="nav-menu-icon" onClick={showMenu}>
        <GiHamburgerMenu />
      </button>
      <ul className="flexed-list">
        <li>About</li>
        <li>Blog</li>
        <li>Download</li>
      </ul>
      <div className="button-div">
        <Button label={"login"} color={"white"} />
        <Button label={"sign up"} color={"white"} />
      </div>
    </StyledNav>
  );
};

export default Navbar;
const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 1rem;
  color: white;
  width: 100%;

  .logo_div {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 3rem;
    height: 40px;
    margin-right: 10px;
  }
  .title {
    font-family: "neucha";
    font-size: 13px;
    font-weight: 600;
  }
  .nav-menu-icon {
    font-size: 20px;
    
    color: white;
  }
  .flexed-list {
    display: none;
    list-style: none;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    flex: 0.9;
    justify-content: space-between;
    align-items: center;
  }
  .button-div {
    display: none;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
  }

 
  @media screen and (max-width: 1300px) {
  }
  @media (max-width: 1100px) {
  }
  @media (max-width: 600px) {
  }
`;
