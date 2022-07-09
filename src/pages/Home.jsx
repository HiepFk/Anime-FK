import React from "react";
import styled from "styled-components";
import Slide from "../components/Home/Slide";
import Anime from "../components/Home/Anime";
import Manga from "../components/Home/Manga";
function Home() {
  return (
    <>
      <Slide />
      <Wrapper>
        <Anime />
        <Manga />
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
  flex-direction: column;
`;

export default Home;
