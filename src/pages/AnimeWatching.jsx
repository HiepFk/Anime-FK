import React from "react";
import styled from "styled-components";
import Video from "../components/Video";
import Review from "../components/Detail/Review";
function AnimeWatching() {
  return (
    <Wrapper>
      <Video />
      <Review />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 2rem 12rem;
`;
export default AnimeWatching;
