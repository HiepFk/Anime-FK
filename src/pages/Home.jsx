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
  @media (max-width: 600px) {
    padding: 1rem;
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 0rem 3rem;
  }
  padding: 0rem 12rem;
  display: flex;
  flex-direction: column;
`;

export default Home;
