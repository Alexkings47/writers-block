import React from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronRight } from "react-icons/bs";
import SearchBar from "../../components/elements/SearchBar";
import BookCard from "../../components/cards/BookCard";
import LibraryCard from "../../components/cards/LibraryCard";

const MyBooks: React.FC<{
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ menu, setMenu }) => {
  const LibArr: JSX.Element[] = [];
  for (let i: number = 0; i <= 10; i++) {
    LibArr.push(
      <LibraryCard key={i} imgUrl="amanda.jpg" title="book1" author="Clinton" />
    );
  }

  return (
    <StyledDiv>
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
          <span
            className={`${menu ? "hide-btn" : "menu-close-icon"}`}
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <GiHamburgerMenu />
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
            pages="50 pages"
            imgUrl="storm.jpeg"
            title="The son of the storm"
            author={"Alex"}
            authorImg={"author.png"}
          />
          <BookCard
            pages="50 pages"
            imgUrl="storm.jpeg"
            title="The son of the storm"
            author={"Afogu"}
            authorImg={"author.png"}
          />
        </div>
      </div>
      <div className="myBooks-bottom">
        <div className="myBooks-bottom-heading">
          <span>Your Library</span>
          <FiMoreHorizontal />
        </div>
        <div className="myBooks-bottom-main">
          <div className="bottom-cards">{LibArr}</div>

          <button className="more-btn">
            <BsChevronRight />
          </button>
        </div>
      </div>
    </StyledDiv>
  );
};

export default MyBooks;
const StyledDiv = styled.div`
  width: 75%;
  height: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.02);
  border-radius: 48px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 2rem 3rem;
  flex-direction: column;
  margin: 0 auto;

  .hide-btn {
    display: none;
  }

  .icon-orange {
    color: #fb6d3a;
    font-size: 20px;
  }
  .top-icons > * {
    font-size: 20px;
    margin-right: 1rem;
    color: #5543a5c0;
    transition: all 0.2s;

    &:hover {
      color: #fb6d3a;
    }
  }

  .menu-close-icon {
    display: none;
    margin-right: 0;
  }

  .myBooks {
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
      flex-direction: column;

      &-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 2rem;
        padding: 1.5rem 0;
      }
      &-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20rem;
        width: 100%;
      }
    }

    &-bottom,
    &-bottom-main {
      flex: 1;
    }

    &-bottom-main {
      height: auto;
    }
    &-top {
      flex-direction: row;
    }
  }
  .bottom-cards {
    width: 93%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow-x: scroll;
    box-shadow: 5px 0 10px inset #000;
  }
  .more-btn {
    width: 50px;
    height: 50px;
    background-color: #f6f6f5;
    border-radius: 4px;
  }

  @media (max-width: 1000px) {
    padding: 2rem 1.8rem;
    width: 72%;
  }
  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
    width: 97%;
    margin-left: auto;

    .menu-close-icon {
      display: inline-block;
    }
    .myBooks {
      &-search {
        margin: 0;
        width: 70%;
      }
    }
  }
  @media (max-width: 500px) {
    padding: 2rem 1rem;
    .myBooks-middle-main {
      overflow-x: scroll;
    }
    .top-icons > * {
      margin-right: 8px;
    }
  }
`;
