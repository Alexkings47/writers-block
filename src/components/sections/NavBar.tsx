import React, {
  useState,
  useRef,
  useEffect,
  SyntheticEvent,
  BaseSyntheticEvent,
} from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

// type Props = {
//   menu: boolean;
// };

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  /* display: ${(props) => (props.menu ? "flex" : "none")} */

  const toggleMenu: () => void = () => {
    setMenu(!menu);
  };
  const menuToggle = useRef(null);
  const windowref = useRef(null);

  // useEffect(() => {
  //   .onclick

  //   return () => {
  //     second
  //   }
  // }, [third])
  const toggleRef: (event: BaseSyntheticEvent) => void = (event) => {};
  return (
    <StyledNav ref={windowref} onClick={toggleRef}>
      <div className="nav-top">
        <div className="logo_div">
          <img
            className="logo"
            src={require("../../images/favicon.jpg")}
            alt="logo"
          />
          <p className="title">Writer's Block</p>
        </div>
        <button className="nav-menu-icon" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>
      <ul
        className={menu ? "flexed-list" : "hide-flexed-list"}
        ref={menuToggle}
      >
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
// <{ menu: any }>
export default Navbar;
const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  .nav-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    z-index: 10;
    padding: 1.5rem;
  }

  .logo_div {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 10px;
    border-radius: 50%;
  }
  .title {
    font-family: "neucha";
    font-size: 14px;
    font-weight: 600;
  }
  .nav-menu-icon {
    font-size: 20px;
    color: white;
  }

  .hide-flexed-list {
    transform: translateY(-20rem);
  }

  .flexed-list {
    font-size: 13px;
    text-align: left;
    background-color: var(--bgcolor);
    width: 100%;
    transform: translateY(0);
    transition: all 0.5s;
    top: 5rem;
    margin-bottom: 5rem;
    width: 50%;
    z-index: 5;
    padding: 0 1.5rem;
    margin-top: 1rem;

    li {
      background-image: linear-gradient(
        120deg,
        transparent 0%,
        transparent 50%,
        orangered 50%
      );
      transition: all 0.5s;
      border-bottom: 1px solid #ffffff68;
      padding: 10px 8px;
      background-size: 240%;
    }
    li:hover {
      background-position: 100%;
      transition: all 0.5s;
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
