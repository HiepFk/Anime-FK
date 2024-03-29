import React from "react";
import styled from "styled-components";
import Item from "../Item";
import { FiSearch } from "react-icons/fi";

function List({ title, data, handeSearch, setText, type }) {
  return (
    <Wrapper>
      <div className="title">
        <div className="left">
          <div className="pillar"></div>
          <div className="desc">{title}</div>
        </div>
        <form className="right" onSubmit={handeSearch}>
          <input
            type="text"
            name="text"
            id="text"
            className="input"
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="text">
            <FiSearch className="icon" />
          </label>
        </form>
      </div>
      <div className="wrapper">
        {data?.map((item, index) => {
          return (
            <Item
              key={index}
              image={item?.images?.jpg?.image_url}
              name={item?.title ? item?.title : item?.name}
              type={type}
              id={item?.mal_id}
            />
          );
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  @media (max-width: 600px) {
    .wrapper {
      grid-template-columns: repeat(1, 1fr) !important;
    }
    .title {
      flex-direction: column;
    }
    .right {
      margin-top: 1rem;
    }
  }
  margin-bottom: 3rem;
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 2.5rem;
    grid-row-gap: 2rem;
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
  .input {
    width: 15rem;
    padding: 0.5rem;
    font-size: 1.25rem;
    border: none;
    background-color: transparent;
    transition: 0.25s linear;
    border-radius: 3px;
  }
  .input:focus {
    background-color: white;
  }
  .icon {
    color: white;
    font-size: 1.5rem;
    margin-left: 1rem;
  }
`;
export default List;
