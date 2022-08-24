import React from "react";
import styled from "styled-components";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import SearchBar from "../../components/elements/SearchBar";
import BookCard from "../../components/cards/BookCard";
import LibraryCard from "../../components/cards/LibraryCard";

const MyBooks = () => {
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
          <span>Your Unfinished Books </span>
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
  padding: 2.5rem 3rem;
  flex-direction: column;

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
    width: 95%;
    margin-left: auto;
  }
  @media (max-width: 500px) {
    .myBooks-middle-main {
      overflow-x: scroll;
    }
   
    .myBooks {
      &-search {
        margin: 0;
        width: 70%;
      }
    }
  }
`;
