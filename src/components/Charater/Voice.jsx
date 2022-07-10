import React from "react";
import styled from "styled-components";

function Voice({ data = [] }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">VOICE</div>
      </div>
      <div className="voice">
        {data?.map((item, index) => {
          return (
            <div className="item" key={index}>
              <img
                src={item?.person?.images?.jpg?.image_url}
                alt=""
                className="img"
              />
              <div className="info">
                <div className="name">{item?.person?.name}</div>
                <div className="country">{item?.language}</div>
              </div>
            </div>
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
  .voice {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1.5rem;
  }
  .item {
    margin-left: 1rem;
    display: flex;
  }
  .img {
    height: 8rem;
    margin-right: 1rem;
    border-radius: 2px;
  }
  .country {
    opacity: 0.8;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  @media (max-width: 600px) {
    .voice {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  @media (max-width: 1080px) and (min-width: 600px) {
    .voice {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

export default Voice;
