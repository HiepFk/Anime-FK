import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    const intervalTime = setInterval(() => {
      nextPage();
    }, 5000);
    return () => clearInterval(intervalTime);
  }, []);

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
          CHECK NOW
        </Link>

        <div className="left button" onClick={prePage}>
          <IoIosArrowBack className="icon " />
        </div>
        <div className="right button" onClick={nextPage}>
          <IoIosArrowForward className="icon" />
        </div>
        <div className="dots">
          {data.map((item) => {
            return (
              <div
                className={
                  item.id - 1 === index ? "dot_item active" : "dot_item"
                }
                key={item.id}
                onClick={() => setIndex(item.id - 1)}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @media (max-width: 600px) {
    padding: 0.5rem 2.5rem;
    .btn,
    .name {
      left: 2rem !important;
    }
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 0rem 3rem;
  }
  padding: 3rem 12rem;
  .container {
    height: 35rem;
    position: relative;
    transition: all 1s linear;
  }

  .name {
    position: absolute;
    bottom: 8rem;
    left: 5rem;
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
    font-weight: 600;
  }
  .btn {
    position: absolute;
    bottom: 4rem;
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
  .dots {
    position: absolute;
    display: flex;
    top: calc(100% - 1.5rem);
    left: calc(50% - 3rem);
  }
  .dot_item {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 0.75rem;
    margin-right: 0.25rem;
    margin-left: 0.25rem;
    background-color: #fff;
    cursor: pointer;
  }
  .active {
    background-color: red;
  }
`;

export default Slide;
