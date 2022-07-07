import React from "react";
import styled from "styled-components";
import img from "../../asset/1.webp";

function Review() {
  const arr = [0, 1, 2, 3];
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">All REVIEWS</div>
      </div>
      {arr.map((item) => {
        return (
          <div className="review" key={item}>
            <div className="item">
              <img src={img} alt="" className="img" />
            </div>
            <div className="text">
              <div className="name">Chris Curry</div>
              <div className="text_mini">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                debitis aperiam qui quia, deleniti animi reiciendis, maiores
                maxime provident fugit dolores nihil veniam, quisquam
                doloremque! Sequi laboriosam nisi cumque maiores!
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: white;
  margin-top: 2rem;
  width: 45rem;
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
  .review {
    display: flex;
    margin-bottom: 1.5rem;
  }
  .item {
    position: relative;
    ::before {
      position: absolute;
      left: 6rem;
      top: 1.5rem;
      border-top: 15px solid transparent;
      border-left: 15px solid #1d1e39;
      content: "";
      transform: rotate(45deg);
    }
  }
  .img {
    width: 5rem;
    height: 5rem;
    border-radius: 5rem;
    margin-right: 1.5rem;
  }
  .text {
    overflow: hidden;
    background: #1d1e39;
    padding: 1rem;
    border-radius: 10px;
  }
  .name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
`;
export default Review;
