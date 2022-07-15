import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
function Card({ data = [""], title }) {
  return (
    <Wrapper>
      {data?.map((item, index) => {
        return (
          <Link
            to={`/${title}s/${item?.mal_id}`}
            className="container"
            key={index}
          >
            <img src={item?.images?.jpg?.image_url} alt="" className="img" />
            <div className="info">
              {item?.rank && (
                <div className="view">
                  <AiFillStar className="icon" />
                  <span>{item?.rank}</span>
                </div>
              )}
              <div className="name">
                {item?.title ? item?.title : item.name}
              </div>
              {item?.name_kanji && (
                <>
                  <div className="name mini">{item.name_kanji}</div>
                </>
              )}
            </div>
          </Link>
        );
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @media (max-width: 1300px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 1rem;
  }
  max-width: 22rem;
  .container {
    display: flex;
    margin-bottom: 2rem;
  }
  .img {
    cursor: pointer;
    height: 10rem;
  }
  .info {
    margin-left: 1.5rem;
  }
  .icon {
    color: yellow;
  }
  .score {
    color: white;
    font-size: 1rem;
  }
  .name {
    font-size: 1.25rem;
    font-weight: 600;
    color: white;
    opacity: 0.8;
  }
  .mini {
    font-size: 1rem;
    margin-top: 1rem;
    opacity: 0.8;
  }
  .view {
    display: flex;
    align-items: center;
    color: white;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    span {
      margin-left: 0.25rem;
    }
  }
`;
export default Card;
