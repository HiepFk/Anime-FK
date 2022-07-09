import React from "react";
import styled from "styled-components";
function Info({ data, arr1 }) {
  return (
    <Wrapper>
      <img src={data?.images?.jpg?.image_url} alt="" className="img" />
      <div className="info">
        <div className="name_English">{data?.name}</div>
        <div className="name_Japan opacity">{data?.name_kanji}</div>
        <div className="nickname opacity">
          Nickname:
          {data?.nicknames?.map((item, index) => {
            return <span key={index}>{item},</span>;
          })}
        </div>
        <div className="wrapper">
          {arr1?.map((item, index) => {
            return (
              <div className="container" key={index}>
                <span className="opacity">{item}</span>
              </div>
            );
          })}
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
    span {
      margin-left: 0.5rem;
    }
  }
  .opacity {
    opacity: 0.8;
  }
  .wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .container {
    text-transform: capitalize;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
    min-width: 25rem;
    margin-top: 1rem;
    ::before {
      content: "";
      position: absolute;
      bottom: 0.25rem;
      left: 0;
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 0.1rem;
      background-color: white;
      opacity: 0.6;
    }
  }
`;
export default Info;
