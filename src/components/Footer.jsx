import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../asset/logo.png";
import { IoIosArrowUp } from "react-icons/io";

function Footer() {
  const Top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={logo} alt="" className="img" />
      </Link>
      <div className="footer">
        <h5 style={{ marginBottom: "0.25rem" }}>
          &copy;{new Date().getFullYear()}
          <span> HiepFK </span>
        </h5>
        <h5>All rights reserved</h5>
      </div>
      <div className="top" onClick={Top}>
        <IoIosArrowUp className="icon" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin-top: 2rem;
  position: relative;
  background-color: #070720;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 12rem;
  .footer {
    color: white;
    font-size: 1rem;
  }
  .top {
    position: absolute;
    top: -1.5rem;
    left: calc(50% - 3rem);
    background-color: #e53637;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .icon {
    color: white;
    font-size: 1.5rem;
  }
`;
export default Footer;
