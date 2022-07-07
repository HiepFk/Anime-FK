import React from "react";
import styled from "styled-components";
import img from "../../asset/1.webp";
function Charater() {
  const arr = [0, 1, 2, 3];
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">CHARATERS</div>
      </div>
      <div className="container">
        {arr.map((item) => {
          return (
            <div className="wrapper" key={item}>
              <img src={img} alt="" className="img" />
              <div className="name">Spike</div>
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
  .container {
    display: grid;
    width: 35rem;
    grid-template-columns: repeat(4, 1fr);
    /* grid-column-gap: 2rem; */
    grid-row-gap: 0.5rem;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .img {
    width: 6rem;
    height: 7rem;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 0.5rem;
  }
`;
export default Charater;
