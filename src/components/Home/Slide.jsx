import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { data } from "../../utils/slide";

function Slide() {
  const [index, setIndex] = useState(0);
  const nextPage = () => {
    setIndex((preValue) => {
      let newValue = preValue + 1;
      if (newValue > data.length - 1) {
        newValue = 0;
      }
      return newValue;
    });
  };
  const prePage = () => {
    setIndex((preValue) => {
      let newValue = preValue - 1;
      if (newValue < 0) {
        newValue = 2;
      }
      return newValue;
    });
  };
  return (
    <Wrapper>
      <div
        className="container"
        style={{
          background: `url(${data[index].url}) no-repeat center center /cover`,
        }}
      >
        <div className="name">{data[index].name}</div>
        <Link to={data[index].link} className="btn">
          Check Now
        </Link>

        <div className="left button" onClick={prePage}>
          <IoIosArrowBack className="icon " />
        </div>
        <div className="right button" onClick={nextPage}>
          <IoIosArrowForward className="icon" />
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 2rem 12rem;
  .container {
    height: 35rem;
    position: relative;
    transition: all 1s linear;
  }

  .name {
    position: absolute;
    bottom: 10rem;
    left: 5rem;
    font-size: 3rem;
    color: #ffffff;
    font-weight: 600;
  }
  .btn {
    position: absolute;
    bottom: 6rem;
    left: 5rem;
    font-size: 1.5rem;
    background-color: #e53637;
    padding: 0.5rem 1rem;
    color: #ffffff;
    border-radius: 5px;
  }
  .button {
    position: absolute;
    z-index: 99;
    width: 3rem;
    height: 3rem;
    background: #242540;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    cursor: pointer;
  }
  .left {
    top: calc(50% - 1.5rem);
    left: -1.5rem;
  }
  .right {
    top: calc(50% - 1.5rem);
    right: -1.5rem;
  }
  .icon {
    font-size: 2rem;
    color: white;
    transform: rotate(-45deg);
  }
`;

export default Slide;
