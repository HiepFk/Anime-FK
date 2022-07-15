import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Video() {
  const location = useLocation();
  // eslint-disable-next-line no-unused-vars
  const data = location.state;

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <Wrapper>
      {/* <iframe
        width="100%"
        height="580"
        src={`https://www.youtube.com/embed/${data?.youtube_id}`}
        title="Cowboy Bebop - Japanese Blu-ray Trailer [HD]"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      /> */}
      <iframe
        width="100%"
        height="580"
        src="https://www.youtube.com/embed/Py9paavgZ-0?list=RDPy9paavgZ-0"
        title="Axwell Λ Ingrosso - More Than You Know Visual EP (Official Video)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">LIST VIDEO (API NOT SUPPORTED MOVIES)</div>
      </div>
      <div className="list">
        {arr.map((item) => {
          return (
            <div className="item" key={item}>
              {item < 10 ? `Ep 0${item}` : `Ep ${item}`}
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @media (max-width: 600px) {
    padding: 1rem;
    .item {
      width: 4.63rem !important;
    }
  }
  @media (max-width: 992px) and (min-width: 600px) {
    padding: 0rem 3rem;
  }
  padding: 2rem 12rem;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }
  .pillar {
    width: 0.2rem;
    height: 2.5rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
  }
  .list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .item {
    color: white;
    width: 5rem;
    padding: 0.5rem 0rem;
    background-color: rgba(255, 255, 255, 0.2);
    margin-right: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.35s linear;
    :hover {
      background-color: rgba(255, 255, 255, 0.95);
      color: black;
    }
  }
`;
export default Video;
