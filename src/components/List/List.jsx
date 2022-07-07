import React from "react";
import styled from "styled-components";
import Item from "../Item";

function ListMini({ title, img, name }) {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12];
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">{title}</div>
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
    margin-bottom: 1rem;
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
`;
export default ListMini;
