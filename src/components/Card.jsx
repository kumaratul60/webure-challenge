import React from "react";
import styled from "styled-components";

import { CombinedShape, Oval, star, moon } from "../components";

const DebitCard = () => {
  return (
    <CardContainer>
      <img src={CombinedShape} alt="" />
      <img className="oval1" src={Oval} alt="" />
      <img className="oval2" src={Oval} alt="" />
      <img className="star" src={star} alt="" />
      <img className="moon" src={moon} alt="" />
      <p className="cardNumber">Card number</p>
      <p className="Number">3829 4820 4629 5025</p>
      <p className="cardHolderName">card holder name</p>
      <p className="name">Atul</p>
      <p className="valid">vaid thru</p>
      <p className="validDate">11/29</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 254px;
  left: 1100px;
  top: 700px;
  border-radius: 40px;
  background: #f5e7e7;
  .oval1 {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    left: 80px;
    top: 50px;
    background: .ffffff;
  }
  .oval2 {
    position: absolute;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    left: 106px;
    top: 50px;
    background: .ffffff;
    mix-blend-mode: normal;
    opacity: 0.36;
  }
  .star {
    position: absolute;
    left: 239.35px;
    top: 10px;
    overflow: hidden;
    z-index: -20px;
  }
  .moon {
    position: absolute;
    width: 79px;
    height: 83px;
    left: 130px;
    top: 126.42px;
  }
  .cardNumber {
    position: absolute;
    height: 12px;
    left: 80px;
    top: 90px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.7;
  }
  .Number {
    position: absolute;
    height: 31px;
    left: 80px;
    top: 95px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: 1.5px;
    color: #000000;
  }
  .cardHolderName {
    position: absolute;
    height: 12px;
    left: 80px;
    top: 190px;
    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    color: #000000;
    mix-blend-mode: normal;
    opacity: 0.7;
  }
  .name {
    position: absolute;
    height: 21px;
    left: 80px;
    top: 200px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
  }
  .valid {
    position: absolute;
    height: 12px;
    left: 300px;
    top: 190px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;

    color: #000000;

    mix-blend-mode: normal;
    opacity: 0.7;
  }
  .validDate {
    position: absolute;
    height: 21px;
    left: 300px;
    right: 7.27%;
    top: 200px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;

    color: #000000;
  }
`;
export default DebitCard;
