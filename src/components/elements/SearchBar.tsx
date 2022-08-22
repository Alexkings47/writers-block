import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

type Props = {
  buttonVal?: string;
  chosenClass: string;
  inputVal: string;
  myref?: HTMLElement;
};

const SearchBar = ({ buttonVal, chosenClass, inputVal }: Props) => {
  const [search, setSearch] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {}, []);

  return (
    <StyledDiv id="search" className={`full-width ${chosenClass}`}>
      <input
        placeholder={inputVal}
        // ref={myref}
        value={search}
        onChange={(evt) => {
          setSearch(evt.target.value);
          console.log(search);
        }}
       
        style={{ width: buttonVal ? "76%" : "100%" }}
      />
      {buttonVal && <button className="searchbtn">{buttonVal}</button>}{" "}
    </StyledDiv>
  );
};

export default SearchBar;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  min-width: 20rem;

  input {
    height: 2.5rem;
    text-indent: 1rem;
    border: 1px solid #ebf3f7;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    font-size: 14px;
    font-weight: 500;

    ::placeholder {
      color: grey;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .searchbtn {
    border: none;
    background-color: #2e90e5;
    height: 2.5rem;
    width: 24%;
    color: white;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    font-size: 14px;
    font-weight: 600;
  }
`;
