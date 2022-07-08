import React from "react";
import error from "../asset/error.gif";
import styled from "styled-components";
function Error() {
  return (
    <Wrapper>
      <img src={error} alt="" />;
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
  img {
    width: 20rem;
  }
`;
export default Error;
