import React from "react";
import styled from "styled-components";
import Item from "../Item";
function Products({ title, name, img }) {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Wrapper>
      <div className="title">
        <div className="pillar"></div>
        <div className="desc">{title}</div>
      </div>
      <div className="products">
        {arr.map((item) => {
          return <Item key={item} name={name} image={img} />;
        })}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: white;
  margin-top: 2rem;
  .title {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
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
  .products {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 1.25rem;
  }
`;
export default Products;
