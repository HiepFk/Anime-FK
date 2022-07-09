import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Charater({ data = [] }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">CHARATERS</div>
      </div>
      <div className="container">
        {data.map((item, index) => {
          return (
            <Link
              to={`/characters/${item?.character?.mal_id}`}
              className="wrapper"
              key={index}
            >
              <img
                src={item?.character?.images?.jpg?.image_url}
                alt=""
                className="img"
              />
              <div className="name">{item?.character?.name}</div>
            </Link>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: white;
  margin-top: 2rem;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .pillar {
    width: 0.2rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .wrapper {
    width: 8rem;
    display: flex;
    flex-direction: column;
    margin-right: 2.5rem;
    color: white;
  }
  .img {
    width: 8rem;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
`;
export default Charater;
