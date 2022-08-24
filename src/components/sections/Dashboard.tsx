import React, { useState } from "react";
import styled from "styled-components";
import Button from "../../components/elements/Button";
import { IoSettingsSharp, IoStatsChartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { RiAppsLine } from "react-icons/ri";
import bgImg from "../../images/backimg.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <StyledDiv className="dashboard" menu={menu}>
      <div className="logo_div">
        <Link to="/">
          <img
            className="logo"
            src={require("../../images/favicon1.jpg")}
            alt="logo"
          />
        </Link>
        <p className="title">Writer's Block</p>
        <button
          className="dashboard-icon"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div>
      <ul className="dashboard-details">
        <li>
          <RiAppsLine />
          <span>Home</span>
        </li>
        <li>
          <IoStatsChartOutline />
          <span>Progress</span>
        </li>
        <li>
          <AiOutlineMessage /> <span>Messages</span>
        </li>
        <li>
          <IoSettingsSharp />
          <span>Settings</span>
        </li>
      </ul>
      <div className="dashboard-support">
        <p className="title">Support 24/7</p>
        <p className="desc">contact us anytime</p>
        <Button
          label={"support"}
          chosenClass={"support-btn"}
          color={"#FB6D3A"}
        />
      </div>
    </StyledDiv>
  );
};

export default Dashboard;
const StyledDiv = styled.div<{ menu: boolean }>`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  width: 25%;
  height: 100%;
  transition: all 0.5s;

  .dashboard {
    &-details {
      text-align: left;
      z-index: 10;

      li {
        padding: 1rem;
        border-radius: 15px;

        span {
          margin-left: 1rem;
        }
      }
      li:hover {
        color: #fb6d3a;
        background-color: white;
        width: 21rem;
      }
    }
    &-support {
      background: url(${bgImg}) right bottom no-repeat;
      background-size: 8rem;
      background-color: #5543a5c0;
      width: 12rem;
      border-radius: 32px;
      padding: 1rem;
      height: 14rem;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-size: 14px;

      .title {
        font-weight: 500;
        font-size: 16px;
        text-align: left;
      }
      .desc {
        color: #ffffff;
        opacity: 0.4;
      }
      .support-btn {
        border-radius: 10px;
        width: 40px;
        height: 36px;
      }

      * {
        margin-bottom: 10px;
      }
    }
  }

  .logo_div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 4rem;
      height: 4rem;
      margin-right: 10px;
      border-radius: 50%;
    }
    .title {
      font-family: "neucha";
      font-size: 14px;
      font-weight: 600;
    }
    .dashboard-icon {
      font-size: 20px;
      color: white;
      display: none;
      margin-left: 1rem;
      transition: all 0.5s;
    }
  }

  @media (max-width: 1000px) {
    padding: 1rem 5px 1rem 5px;

    .dashboard-support {
      width: 10rem;
    }
  }
  @media (max-width: 700px) {
    position: absolute;
    background: #503e9d;
    top: 0;
    left: 0;
    z-index: 100;
    width: ${(props) => (props.menu ? "45%" : "5%")};
    padding: 2rem 10px 2rem 1rem;
    align-items: center;

    transform: translateX(-12rem);
    transform: ${(props) =>
      props.menu ? "translateX(0)" : "translateX(-12rem)"};

    .logo_div {
      margin-top: 2rem;
      .logo {
        width: 3rem;
        height: 3rem;
      }
      .dashboard-icon {
        display: inline-block;
        margin-left: ${(props) => (props.menu ? "1rem" : "19rem")};
        margin-right: 1rem;
      }
    }
  }
  @media (max-width: 500px) {
    .logo_div {
      .dashboard-icon {
        margin-left: ${(props) => (props.menu ? "5px" : "19rem")};
        margin-right: 1rem;
      }
    }
  }
`;
