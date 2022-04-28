import styled from "styled-components";

export const Nav = styled.div`
  background-color: black;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  z-index: 20;
  border-bottom: ${({ showHamburgerMenu }) =>
    showHamburgerMenu ? "none" : " 2px solid red"};
`;

export const LogoContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LogoImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 5px;
`;

export const HamburgerContainer = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  backgroun-color: red;

  &.help-icon {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    background-color: black;
    border-radius: 5px;

    @media screen and (max-width: 450px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  &.help-icon {
    display: block;
    cursor: unset;
  }

  span {
    height: 6px;
    width: 35px;
    background-color: whitesmoke;
    margin-bottom: 4px;
    border-radius: 5px;

    &.help-icon {
      display: block;

      &.top {
        margin-top: 3px;
      }
    }

    &.close-menu {
      background-color: red;
    }
  }

  @media screen and (max-width: 850px) {
    display: flex;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: black;
  padding-bottom: ${({ showHamburgerMenu }) =>
    showHamburgerMenu ? "50px" : "0px"};

  @media screen and (max-width: 850px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ showHamburgerMenu }) =>
      showHamburgerMenu ? "700px" : "0px"};
    transition: max-height 0.5s linear;
    border-bottom: 3px solid red;
  }
`;

export const MenuLink = styled.p`
  font-size: 16px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-in-out;
  color: whitesmoke;

  &:hover {
    transform: scale(1.2);
    color: yellow;

    @media screen and (max-width: 1366px) {
      transform: none;
      transition: none;
      color: whitesmoke;
    }
  }
`;
