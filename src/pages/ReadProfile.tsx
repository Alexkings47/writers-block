import React,{useRef} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/elements/Button";
import { IoSettingsSharp, IoStatsChartOutline } from "react-icons/io5";
import { AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { RiAppsLine } from "react-icons/ri";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import bgImg from "../images/backimg.png";
import SearchBar from "../components/elements/SearchBar";
import BookCard from "../components/cards/BookCard";
import LibraryCard from "../components/cards/LibraryCard";

const ReadProfile: React.FC = () => {
  // const myref = useRef<HTMLInputElement>(null);


  const LibArr: JSX.Element[] = [];
  for (let i: number = 0; i <= 5; i++) {
    LibArr.push(
      <LibraryCard
        key={i}
        imgUrl="libraryCard"
        title="book1"
        author="Clinton"
      />
    );
  }
  console.log(LibArr);
  return (
    <StyledMain>
      <div className="dashboard">
        <div className="logo_div">
          <Link to="/">
            <img
              className="logo"
              src={require("../images/favicon.png")}
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
      </div>
      <div className="myBooks">
        <div className="myBooks-top">
          <SearchBar
            inputVal="search"
            // ref={myref}
            chosenClass="myBooks-search"
          />
          <div className="top-icons">
            <span className="icon">
              <AiOutlineUser />
            </span>
            <span className="icon-orange">
              <BiLogOutCircle />
            </span>
          </div>
        </div>
        <div className="myBooks-middle">
          <div className="myBooks-middle-heading">
            <span>Your Unfinished Books </span>
            <FiMoreHorizontal />
          </div>
          <div className="myBooks-middle-main">
            <BookCard
              imgUrl="storm"
              title="The son of the storm"
              author={"Alex"}
              authorImg={"author"}
            />
            <BookCard
              imgUrl="storm"
              title="The son of the storm"
              author={"Afogu"}
              authorImg={"author"}
            />
          </div>
        </div>
        <div className="myBooks-bottom">
          <div className="myBooks-bottom-heading">
            <span>Your Unfinished Books </span>
            <FiMoreHorizontal />
          </div>
          <div className="myBooks-middle-main">
            {/* {LibArr} */}
            <BookCard
              authorImg={"author"}
              imgUrl="libraryCard"
              title="book1"
              author="Clinton"
            />
            <BsChevronRight />
          </div>
        </div>
      </div>
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

  .dashboard {
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    padding: 2rem 4rem;
    width: 25%;

    &-details {
      text-align: left;
      /* border: 1px solid red; */

      li {
        margin-bottom: 2rem;

        span {
          margin-left: 1rem;
        }
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
      align-items: flex-start;
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
      width: 5rem;
      height: 5rem;
      margin-right: 10px;
      border-radius: 50%;
    }
    .title {
      font-family: "neucha";
      font-size: 14px;
      font-weight: 600;
    }
  }

  .myBooks {
    width: 75%;
    background: #ffffff;
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.02);
    border-radius: 48px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    padding: 3rem;
    flex-direction: column;

    &-search {
      margin: 0;
      width: 80%;
    }
    &-bottom {
      height: 10rem;
    }
    &-top,
    &-middle,
    &-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 1.5rem 0 1rem;
      flex-direction: column;

      .top-icons {
        width: 6rem;

        span {
          margin-left: 1rem;
          font-size: 20px;
        }
      }
      &-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 2rem;
        padding: 0 0 1.5rem;
      }
      &-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20rem;
        width: 100%;
      }
    }
    &-middle {
      height: 70%;
    }
    &-top {
      flex-direction: row;
    }
  }
`;
