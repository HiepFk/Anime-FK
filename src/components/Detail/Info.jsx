import React from "react";
import styled from "styled-components";
import img from "../../asset/details-pic.jpg";
import { AiFillEye } from "react-icons/ai";
import { HiChatAlt2 } from "react-icons/hi";
import { data } from "../../utils/link";
function Info() {
  return (
    <Wrapper>
      <div
        className="img"
        style={{
          background: `url(${img}) no-repeat center center /cover`,
        }}
      >
        <div className="img_info">
          <div className="img_desc">
            <HiChatAlt2 className="icon" />
            <span>999</span>
          </div>
          <div className="img_desc">
            <AiFillEye className="icon" />
            <span>999</span>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="name_English">Fate Stay Night: Unlimited Blade</div>
        <div className="name_Japan opacity">
          フェイト／ステイナイト, Feito／sutei naito
        </div>
        <div className="info opacity">
          Every human inhabiting the world of Alcia is branded by a “Count” or a
          number written on their body. For Hina’s mother, her total drops to 0
          and she’s pulled into the Abyss, never to be seen again. But her
          mother’s last words send Hina on a quest to find a legendary hero from
          the Waste War - the fabled Ace!
        </div>
        <div className="wrapper">
          {data.map((item, index) => {
            return (
              <div className="container" key={index}>
                <span className="opacity">{item.title}</span>
                {item.value}
              </div>
            );
          })}
        </div>
        <div className="btn">WATCH NOW</div>
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
  .info {
    font-size: 1.15rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
  }
  .opacity {
    opacity: 0.7;
  }
  .wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 0.5rem;
  }
  .container {
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 1.5rem;
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
      width: 8rem;
      display: inline-block;
    }
  }
  .btn {
    margin-top: 1.5rem;
    font-size: 1.15rem;
    width: 10rem;
    letter-spacing: 1px;
    background-color: #e53637;
    padding: 0.5rem 0rem;
    text-align: center;
    border-radius: 5px;
    position: relative;
    transition: transform 0.25s linear;
    :hover {
      transform: translateX(1rem);
    }
  }
`;
export default Info;
