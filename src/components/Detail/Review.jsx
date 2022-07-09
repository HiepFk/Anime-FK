import React from "react";
import styled from "styled-components";

function Review({ data }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">All REVIEWS</div>
      </div>
      <div className="wrapper">
        {data.map((item) => {
          return (
            <div className="review" key={item}>
              <div className="item">
                <img
                  src={item?.user?.images?.jpg?.image_url}
                  alt=""
                  className="img"
                />
              </div>
              <div className="text">
                <div className="name">{item?.user?.username}</div>

                <div className="text_mini">Votes : {item?.votes}</div>
                <div className="text_mini">
                  Overall : {item?.scores.overall}
                </div>
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
  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .review {
    display: flex;
    margin-bottom: 2rem;
    margin-right: 2rem;
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
    min-width: 13rem;
  }
  .name {
    font-size: 1.25rem;
    font-weight: 600;
  }
  .text_mini {
    margin-top: 0.5rem;
  }
`;
export default Review;
