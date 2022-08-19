import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/elements/Button";
import { IoSettingsSharp, IoStatsChartOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { RiAppsLine } from "react-icons/ri";

const ReadProfile: React.FC = () => {
  return (
    <StyledMain>
      <div className="dashboard">
        <div className="logo_div">
          <Link to="/">
            <img
              className="logo"
              src={require("../images/favicon.jpg")}
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
          <p>Support 24/7</p>
          <p>contact us anytime</p>
          <Button
            label={"support"}
            chosenClass={"dashboard-btn"}
            color={"#FB6D3A"}
          />
        </div>
      </div>
      <div className="display-right"></div>
    </StyledMain>
  );
};

export default ReadProfile;
const StyledMain = styled.main`
  background: #503e9d;
  width: 100%;
  height: 100vh;
  display: flex;

  .dashboard {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 2rem 4rem;

    &-btn {
      border-radius: 10px;
    }
    &-details {
      text-align: left;
      /* border: 1px solid red; */

      li {
        margin-bottom: 2rem;

        span{
          margin-left:1rem ;
        }
      }
    }
    &-support {
      background: #5543a5;
      border-radius: 32px;
      padding: 1rem;
      display: flex;
      flex-direction: column;

      * {
        margin-bottom: 1rem;
      }
    }
  }
  .logo_div {
    display: flex;
    align-items: center;

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
  }

  .display-right {
    width: 70%;
    background: #ffffff;
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.02);
    border-radius: 48px;
  }
`;
