import React from "react";
import styled from "styled-components";

import img from "../../asset/5.jpg";
function Info() {
  return (
    <Wrapper>
      <img src={img} alt="" className="img" />
      <div className="info">
        <div className="name_English">Luffy Monkey D.</div>
        <div className="name_Japan opacity">モンキー・D・ルフィ</div>
        <div className="nickname opacity">
          "Mugiwara", "Straw Hat", "Lucy", "Luffytaro"
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  color: white;
  .img {
    height: 25rem;
    margin-right: 5rem;
  }
  .name_English {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .name_Japan,
  .nickname {
    margin-bottom: 0.25rem;
  }
  .opacity {
    opacity: 0.8;
  }
`;
export default Info;
