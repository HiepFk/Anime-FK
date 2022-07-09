import React from "react";
import styled from "styled-components";

function About({ arr2 = [] }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">ABOUT</div>
      </div>
      <div className="about">
        {arr2?.map((item, index) => {
          return (
            <div className="desc_mini" key={index}>
              {item}
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
  .desc_mini {
    margin-left: 1rem;
    margin-bottom: 1.2rem;
    letter-spacing: 0.1rem;
  }
`;
export default About;
