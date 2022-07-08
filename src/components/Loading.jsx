import React from "react";
import loading from "../asset/loading.gif";
import styled from "styled-components";
function Loading() {
  return (
    <Wrapper>
      <img src={loading} alt="" />;
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  margin-bottom: 11rem;
  img {
    width: 20rem;
  }
`;
export default Loading;
