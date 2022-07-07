import React from "react";
import styled from "styled-components";
import Trailer from "./Trailer";
function TopTrailer() {
  const arr = [0, 1, 2, 3];

  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">Top Trailer</div>
      </div>
      {arr.map((item) => {
        return <Trailer key={item} />;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  .pillar {
    width: 0.175rem;
    height: 1.75rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.25rem;
    color: white;
    font-weight: 600;
  }
`;
export default TopTrailer;
