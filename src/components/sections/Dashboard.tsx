import React from "react";
import styled from "styled-components";
import Button from "../../components/elements/Button";
import { IoSettingsSharp, IoStatsChartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AiOutlineMessage } from "react-icons/ai";
import { RiAppsLine } from "react-icons/ri";
import bgImg from "../../images/backimg.png";

const Dashboard = () => {
  return (
    <StyledDiv className="dashboard">
      <div className="logo_div">
        <Link to="/">
          <img
            className="logo"
            src={require("../../images/favicon1.jpg")}
            alt="logo"
          />
        </Link>
        <p className="title">Writer's Block</p>
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
const StyledDiv = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2rem;
  width: 25%;

  /* * {
      border: 1px solid red;
    } */
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
  }
`;
