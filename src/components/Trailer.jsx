import React from "react";
import styled from "styled-components";
import { AiFillEye } from "react-icons/ai";

import img from "../asset/4.jpg";
function Trailer() {
  return (
    <Wrapper>
      <img src={img} alt="" className="img" />
      <div className="info">
        <div className="type">
          <div className="desc_mini">Trailer</div>
          <div className="desc_mini">Anime</div>
        </div>
        <div className="name">One Piece Stampede 2020</div>
        <div className="view">
          <AiFillEye className="icon" />
          <span>999 Viewes</span>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 1.5rem;

  .img {
    cursor: pointer;
    height: 8rem;
  }
  .info {
    margin-left: 1.5rem;
  }
  .type {
    display: flex;
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
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 0.5rem;
  }
  .view {
    display: flex;
    align-items: center;
    color: white;
    padding: 0.2rem 0.5rem;
    border-radius: 0.2rem;
    font-size: 0.75rem;
    opacity: 0.8;
    transform: translateX(-0.5rem);
    span {
      margin-left: 0.25rem;
    }
  }
`;
export default Trailer;
