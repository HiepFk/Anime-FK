import React from "react";
import img from "../asset/3.jpg";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";

function Episode() {
  return (
    <Wrapper>
      <div
        className="img"
        style={{
          background: `url(${img}) no-repeat center center /cover`,
        }}
      >
        <div className="header">
          <div className="esp">212 / ?</div>
          <div className="view">
            <AiFillEye className="icon" />
            <span>999</span>
          </div>
        </div>
        <div className="name">
          Fate/stay night: Heaven's Feel I. presage flower
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;
  .img {
    height: 10rem;
    width: 22rem;
    border-radius: 0.5rem;
    position: relative;
  }
  .header {
    position: absolute;
    top: 0.5rem;
    padding: 0rem 0.5rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .esp {
    background-color: red;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 1rem;
  }
  .view {
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 1rem;
    span {
      margin-left: 0.25rem;
    }
  }

  .name {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;
export default Episode;
