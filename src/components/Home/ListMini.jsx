import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import Item from "../Item";

function ListMini({ title, img, name, link }) {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Wrapper>
      <div className="title">
        <div className="left">
          <div className="pillar"></div>
          <div className="desc">{title}</div>
        </div>
        <Link to={`${link}`} className="right">
          <div className="all">View all</div>
          <BsArrowRight className="icon" />
        </Link>
      </div>
      <div className="wrapper">
        {array.map((item) => {
          return <Item key={item} image={img} name={name} />;
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-bottom: 3rem;
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 2rem;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .pillar {
    width: 0.25rem;
    height: 2rem;
    background-color: #e53637;
    margin-right: 1rem;
  }
  .desc {
    font-size: 1.5rem;
    color: white;
    font-weight: 600;
  }
  .all {
    color: white;
    font-size: 1rem;
    letter-spacing: 2px;
  }
  .icon {
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;
export default ListMini;
