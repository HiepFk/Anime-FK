import React from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
function Pagination({ handePage, page }) {
  const handeCheck = (e) => {
    handePage(e.selected + 1);
  };
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={25}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        onPageChange={handeCheck}
        forcePage={page - 1}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .paginationBttns {
    max-width: 100%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .paginationBttns a {
    padding: 10px;
    margin: 0.5rem;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
  }

  .paginationBttns a:hover {
    color: white;
    background-color: white;
    color: black;
  }

  .paginationActive a {
    color: black;
    background-color: white;
  }

  .paginationDisabled a {
    opacity: 0;
    pointer-events: none;
  }
`;
export default Pagination;
