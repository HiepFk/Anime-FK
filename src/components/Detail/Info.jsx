import React from "react";
import styled from "styled-components";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import MiniInfo from "./MiniInfo";

function Info({ anime }) {
  return (
    <Wrapper>
      <div
        className="img"
        style={{
          background: `url(${anime?.images?.jpg?.image_url}) no-repeat center center /cover`,
        }}
      >
        <div className="top">
          <AiFillStar className="icon icon_top" />
          <span>{anime?.rank}</span>
        </div>
        <div className="img_info">
          <div className="img_desc">
            <FaUserAlt className="icon" />
            <span>{anime?.members}</span>
          </div>
          <div className="img_desc">
            <AiFillHeart className="icon icon_heart" />
            <span>{anime?.favorites}</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="name_English">{anime?.title}</div>
        <div className="name_Japan opacity">
          {anime?.title_japanese} / {anime?.title_english}
        </div>
        <div className="wrapper">
          <MiniInfo anime={anime} />
        </div>
        <Link to={`/animes/${anime?.mal_id}/video`} state={anime?.trailer}>
          <div className="btn">WATCH NOW</div>
        </Link>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  color: white;
  width: 100%;
  .img {
    position: relative;
    height: 28rem;
    min-width: 17rem;
    border-radius: 5px;
    margin-right: 2rem;
  }
  .img_info {
    position: absolute;
    bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0rem 0.75rem;
  }
  .img_desc {
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    font-size: 0.85rem;
    .icon {
      margin-right: 0.5rem;
    }
  }
  .name_English {
    font-size: 2.5rem;
    font-weight: 600;
  }
  .name_Japan {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .opacity {
    opacity: 0.7;
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
    span {
      width: 7rem;
      display: inline-block;
    }
    p {
      margin-right: 0.5rem;
    }
  }
  .top {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem;
    min-width: 3.5rem;
    border-radius: 5px;
    font-size: 0.85rem;
  }
  .icon_top {
    color: rgba(245, 229, 27);
  }
  .icon_heart {
    color: red;
  }
  .btn {
    margin-top: 1.5rem;
    font-size: 1.15rem;
    font-weight: 620;
    width: 10rem;
    color: white;
    letter-spacing: 1px;
    background-color: #e53637;
    padding: 0.5rem 0rem;
    text-align: center;
    border-radius: 5px;
    position: relative;
    transition: transform 0.5s linear;
    :hover {
      transform: translateX(1rem);
    }
  }
`;
export default Info;
