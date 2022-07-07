import React from "react";
import styled from "styled-components";
import Info from "../components/Detail/Info";
import Charater from "../components/Detail/Charater";
import Review from "../components/Detail/Review";
function DetailAnime() {
  return (
    <Wrapper>
      <Info />
      <Charater />
      <Review />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 12rem;
`;
export default DetailAnime;
