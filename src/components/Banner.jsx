import React from "react";

import DebitCard from "./Card";

import {
  Union,
  image,
  ring,
  like,
  wine,
  heart,
  calender,
  Icon_male,
  plus,
  innerplus,
  map,
  girl,
  boy,
} from "../components";

import styles from "../styles/Banner.module.css";
import styled from "styled-components";

const Banner = () => {
  // Main div => inside two inner main div
  return (
    <>
      <MainBanner className={styles.maindivhere}>
        <div>
          <br />
          <br />
          <p id={styles.deserverbetter}>Because you deserve better</p>
          <p>
            Get noticed for <span>who</span> you are, <span>not what</span> you
            look like.
          </p>
          <p id={styles.para}>
            You're more than just a photo. You have stories to tell, and
            passions to share, and things to talk about that are more
            interesting than the weather. Because you deserve what dating
            deserves:better.
          </p>
          <Input className={styles.inputdiv}>
            <div>
              <img src={Union} alt="" />
              <p id={styles.email}>Enter your email</p>
            </div>
            <span id={styles.register}>
              <p>Get Started</p>
            </span>
          </Input>
        </div>
        <div>
          {/* left part 2 div */}
          <div className={styles.secondbelow}>
            <p>15k+</p>
            <p>Dates and matches made everyday</p>
            <p>1,456</p>
            <p>New members signup every day</p>
            <p>1M+</p>
            <p>Members from around the world</p>
          </div>
        </div>
      </MainBanner>

      <Posters className={styles.posters}>
        <img id={styles.mainimage} src={image} alt="" />
        <Ring className={styles.rotate}>
          <img src={ring} alt="" />
        </Ring>
        <Like className={styles.rotate} id={styles.likeicon}>
          <img src={like} alt="" />
        </Like>
        <Wine className={styles.rotate} id={styles.wine}>
          <img src={wine} alt="" />
        </Wine>
        <Heart className={styles.rotate} id={styles.heart}>
          <img src={heart} alt="" />
        </Heart>
        <Calender className={styles.rotate} id={styles.calender}>
          <img src={calender} alt="" />
        </Calender>
        <Male>
          <span id={styles.malespan}>
            <img src={Icon_male} alt="" /> <p>Male</p>
          </span>
        </Male>
        <Years>
          <span id={styles.years}>
            <img src={plus} alt="" /> <img src={innerplus} alt="" />
            <p>30-35 Years</p>
          </span>
        </Years>
        <Newyork>
          <span id={styles.newyork}>
            <img src={map} alt="" /> <p>New York</p>
          </span>
        </Newyork>
        <Angela>
          <span id={styles.angela}>
            <img src={girl} alt="" />
            <p>Angela Taylor</p> <p>Cincinati, OH</p>
            <span>
              <p>Select</p>
            </span>
          </span>
        </Angela>
        <Mike>
          <span id={styles.mike}>
            <img src={boy} alt="" /> <p>Mike Johnson</p> <p>NY City, NY</p>
            <span>
              <p>Select</p>
            </span>
          </span>
        </Mike>
        <DebitCard />
      </Posters>
    </>
  );
};

export default Banner;

const Input = styled.div`
  display: flex;
  justify-content: space-between;
  width: 515px;
  height: 68px;
  left: 140px;
  top: 600px;
  background: #ffffff;
  border-radius: 40px;
  margin-top: 15px;
  margin-left: 140px;
`;
const MainBanner = styled.div`
  margin-top: 125px;
`;
const Posters = styled.div``;
const Ring = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 782px;
  top: 132px;
  background-color: white;
  border-radius: 50px;
`;

const Like = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  left: 1077px;
  top: 156px;
  background: #ee0f32;
  border-radius: 50px;
`;
const Wine = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  left: 704px;
  top: 343px;
  background: #ee0f32;
  border-radius: 50px;
`;

const Heart = styled.div`
  position: absolute;
  width: 69px;
  height: 69px;
  left: 1235px;
  top: 326px;
  background: #ffffff;
  border-radius: 50px;
`;
const Calender = styled.div`
  position: absolute;
  width: 77px;
  height: 77px;
  left: 1235px;
  top: 576px;
  border-radius: 50px;
  background: linear-gradient(0deg, #fff8f2, #fff8f2), #ddd0cb;
`;

const Male = styled.div`
  position: absolute;
  width: 123px;
  height: 44px;
  left: 660px;
  top: 680px;
  background: #ffffff;
  box-shadow: -20px 14px 24px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 10px;
`;

const Years = styled.div`
  position: absolute;
  width: 123px;
  height: 44px;
  left: 800px;
  top: 680px;
  background: #f59b5a;
  border-radius: 10px;
`;
const Newyork = styled.div`
  position: absolute;
  width: 123px;
  height: 44px;
  left: 940px;
  top: 680px;
  background: #ffffff;
  box-shadow: -20px 14px 24px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(15px);
  border-radius: 10px;
`;
const Angela = styled.div`
  position: absolute;
  width: 365px;
  height: 98px;
  left: 660px;
  top: 760px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 10px;
`;
const Mike = styled.div`
  position: absolute;
  width: 365px;
  height: 98px;
  left: 690px;
  top: 880px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  border-radius: 10px;
`;
