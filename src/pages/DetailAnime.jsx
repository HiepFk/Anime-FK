import React from "react";
import styled from "styled-components";
import Info from "../components/Detail/Info";
import Charater from "../components/Detail/Charater";
import Review from "../components/Detail/Review";
import TopEpisodes from "../components/TopEpisodes";
import TopTrailer from "../components/TopTrailer";
function DetailAnime() {
  return (
    <Wrapper>
      <Info />
      <div className="content">
        <div className="left">
          <Charater />
          <Review />
        </div>
        <div className="right">
          <TopEpisodes />
          <TopTrailer />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 12rem;
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
  }
  .left {
    width: calc(100% - 25rem);
  }
  .right {
    margin-left: 3.5rem;
    height: 100%;
  }
`;
export default DetailAnime;
