import React from "react";
import styled from "styled-components";

function Synopsis({ synopsis }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">SYNOPSIS</div>
      </div>
      <div className="info">{synopsis}</div>
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
  .info {
    font-size: 1.15rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    opacity: 0.8;
  }
`;
export default Synopsis;
