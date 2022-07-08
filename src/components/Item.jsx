import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

function Item({ name, image }) {
  return (
    <Wrapper>
      <div
        className="img"
        style={{
          background: `url(${image}) no-repeat center center /cover`,
        }}
      >
        {name === "Luffy Monkey D" ? (
          <Link to={`/charaters/1`} className="container">
            <AiFillEye className="icon" />
          </Link>
        ) : (
          <Link to={`/animes/1`} className="container">
            <AiFillEye className="icon" />
          </Link>
        )}
      </div>
      <div className="active">
        <div className="desc_mini">Active</div>
        <div className="desc_mini">Best</div>
      </div>
      <div className="name">{name}</div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  .img {
    height: 20rem;
    border-radius: 0.5rem;
    position: relative;
  }
  .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.15s linear;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
  .icon {
    font-size: 1.5rem;
    color: white;
  }

  .active {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.75rem;
  }
  .desc_mini {
    color: white;
    background-color: #3c3d55;
    padding: 0.15rem 0.75rem;
    margin-right: 1rem;
    font-size: 0.75rem;
    border-radius: 0.5rem;
  }
  .name {
    color: white;
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
export default Item;
