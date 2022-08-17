import React, { useState } from "react";
import styled from "styled-components";
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
          src={require("../../images/favicon.jpg")}
          alt="logo"
        />
        <p className="title">Writer's Block</p>
      </div>
      <button className="nav-menu-icon" onClick={showMenu}>
        <GiHamburgerMenu />
      </button>
      <ul className={menu ? "flexed-list" : "hide-flexed-list"}>
        <li>About</li>
        <li>Blog</li>
        <li>Download</li>
      </ul>
      {/* <div className="button-div">
        <Button label={"login"} color={"white"} />
        <Button label={"sign up"} color={"white"} />
      </div> */}
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
  margin-bottom: 5rem;

  .logo_div {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 3rem;
    height: 3rem;
    margin-right: 10px;
    border-radius: 50%;
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
  .hide-flexed-list {
   position: absolute;
   top: -5rem;
   left: 0;
   transition: 1s;
  }
  .flexed-list {
    font-size: 13px;
    text-align: left;
    background-color: black;
    position: absolute;
    left: 0;
    top: 5rem;
    margin-bottom: 5rem;
    width: 50%;

    li {
      border-bottom: 1px solid #ffffff68;
      padding: 10px 8px;
    }
  }
  .button-div {
    display: none;
    margin-left: 1rem;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 1100px) {
  }
  @media screen and (max-width: 1300px) {
  }
`;
