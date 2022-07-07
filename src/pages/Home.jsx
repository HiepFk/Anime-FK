import React from "react";
import styled from "styled-components";

import Slide from "../components/Home/Slide";
import Anime from "../components/Home/Anime";
import Manga from "../components/Home/Manga";
import TopEpisodes from "../components/TopEpisodes";
import TopTrailer from "../components/TopTrailer";
function Home() {
  return (
    <>
      <Slide />
      <Wrapper>
        <div className="left">
          <Anime />
          <Manga />
        </div>
        <div className="right content">
          <TopEpisodes />
          <TopTrailer />
        </div>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0rem;
    flex-direction: column;
  }
  padding: 0rem 12rem;
  display: flex;

  .left {
    width: calc(100% - 25rem);
  }
  .right {
    margin-left: 3.5rem;
    height: 100%;
  }
`;

export default Home;
