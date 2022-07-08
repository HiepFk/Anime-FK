import React from "react";
import Info from "../components/Charater/Info";
import Voice from "../components/Charater/Voice";
import Products from "../components/Charater/Products";
import About from "../components/Charater/About";
import styled from "styled-components";
import anime from "../asset/6.jpg";
import manga from "../asset/7.jpg";
function DetailCharacter() {
  return (
    <Wrapper>
      <Info />
      <About />
      <Voice />
      <Products title="ANIME" name="One Piece" img={anime} />
      <Products title="MANGA" name="One Piece" img={manga} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 12rem;
`;
export default DetailCharacter;
