import React, { useRef, useState } from "react";
import styled from "styled-components";

type Props = {
  buttonVal?: string;
  chosenClass: string;
  inputVal: string;
  myref?: HTMLElement;
};

const SearchBar = ({ buttonVal, chosenClass, inputVal }: Props) => {
  const [search, setSearch] = useState<string>("");
  const [render, setrender] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledDiv
      className={` ${chosenClass}`}
      style={{
        border:
          document.activeElement === inputRef.current
            ? "1px solid #2e90e5 "
            : "",
      }}
    >
      <input
        placeholder={inputVal}
        value={search}
        onChange={(evt) => {
          setSearch(evt.target.value);
          console.log(search);
        }}
        ref={inputRef}
        style={{ width: buttonVal ? "76%" : "100%" }}
        onFocus={()=>{setrender(!render)}}
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
  min-width: 10rem;

  input {
    height: 2.5rem;
    text-indent: 1rem;
    border: 1px solid #555b5e;
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
  input:focus {
    outline: none;
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
