import React from "react";
import styled from "styled-components";
import img from "../../asset/5.jpg";

function Voice() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">VOICE</div>
      </div>
      <div className="voice">
        {arr.map((item) => {
          return (
            <div className="item" key={item}>
              <img src={img} alt="" className="img" />
              <div className="info">
                <div className="name">Lufy</div>
                <div className="country">Japan</div>
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
    grid-template-columns: repeat(6, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1.25rem;
  }
  .item {
    margin-left: 1rem;
    display: flex;
  }
  .img {
    height: 5rem;
    margin-right: 1rem;
    border-radius: 2px;
  }
  .country {
    opacity: 0.8;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
`;

export default Voice;
