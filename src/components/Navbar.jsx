import React from "react";
import styled from "styled-components";

import { rabbit } from "../components";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavOne>
        <img id={styles.rabbit} src={rabbit} alt="" />
        <Datify>Datify</Datify>
      </NavOne>
      <NavTwo>
        <NavTwoWrapper1 className={styles.navtwo1}>
          <p>Home</p>
          <p>Members</p>
          <p>Blog</p>
          <p>Privacy</p>
          <p>Contact</p>
        </NavTwoWrapper1>
        <NavTwoWrapper2>
          <p id={styles.login}>Log In</p>
          <span id={styles.registerspan}>
            <p>Register</p>
          </span>
        </NavTwoWrapper2>
      </NavTwo>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 1292px;
  height: 53px;
  left: 74px;
  top: 7px;

  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    width: 800px;
  }
`;

const NavOne = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 122px;
  height: 26px;
  left: 130px;
  top: 48px;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    margin-left: 200px;
  }
  @media screen and (max-width: 767px) {
    margin-left: 200px;
  }
`;

const Datify = styled.span`
  width: 48px;
  height: 24px;
  left: 108px;
  top: 50px;
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #1a1d32;
`;

const NavTwo = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 856px;
  height: 53px;
  left: 510px;
  top: 37px;
  @media screen and (min-width: 768px) and (max-width: 992px) {
    display: flex;
    width: 800px;
  }
`;

const NavTwoWrapper1 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 446px;
  height: 37px;
  left: 510px;
  top: 53px;
`;
const NavTwoWrapper2 = styled.div`
  display: flex;
  justify-content: space-around;
  width: 246px;
  height: 37px;
  top: 53px;
`;
