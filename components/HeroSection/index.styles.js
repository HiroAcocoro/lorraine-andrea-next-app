import styled from "styled-components";

import Breakpoints from "../../constants/Breakpoints";

const { lg } = Breakpoints;

export const HeroSectionMainContainer = styled.div`
  height: 110vh;
`;

export const HeroSectionBackground = styled.div`
  height: 100vh;
  position: absolute;
  top: 20%;
  left: 0;
  opacity: ${({ scrollY }) => (scrollY > 10 ? `1` : `0`)};
  transform: ${({ scrollY }) => scrollY > 10 && `translateY(-20%)`};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export const HeroSectionBackgroundImgContainer = styled.div`
  position: absolute;
  display: block;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  height: ${({ height }) => height};
  width: ${({ width }) => width};

  @media screen and (min-width: ${lg}) {
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    height: ${({ height }) => `calc(${height} * 3)`};
    width: ${({ width }) => `calc(${width} * 3)`};
    ${({ lgMod }) => lgMod};
  }
`;

export const HeroSectionContent = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  animation: fadeIn 3s;
  margin-left: 2rem;
  transform: ${({ scrollY }) =>
    scrollY > 10 && `translate(-10%,-1.25em) scale(0.7)`};
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media screen and (min-width: ${lg}) {
    margin-left: ${({ scrollY }) => scrollY < 10 && `35vw`};
    transform: ${({ scrollY }) =>
      scrollY > 10 && `translate(0,-0.25em) scale(0.8)`};
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const HeroSectionIntro = styled.div`
  font-size: 48px;
  font-weight: 500;
  line-height: 72px;
  letter-spacing: 1px;
  color: #ffffff;

  @media screen and (min-width: ${lg}) {
    font-size: 98px;
    line-height: 88px;
  }
`;

export const HeroSectionName = styled.div`
  font-size: 38px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #ffffff;

  @media screen and (min-width: ${lg}) {
    font-size: 78px;
    line-height: 88px;
  }
`;

export const HeroSectionDescription = styled.div`
  font-size: 38px;
  font-weight: 800;
  line-height: 72px;
  letter-spacing: 1px;
  color: #ff8f8f;

  @media screen and (min-width: ${lg}) {
    font-size: 63px;
    line-height: 88px;
  }
`;

export const HeroLinkContainer = styled.div`
  margin-left: 2rem;
  opacity: ${({ scrollY }) => (scrollY > 10 ? `1` : `0`)};
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

  a {
    width: 145px;
    height: 45px;
    background: #ffc7c7;
    border-radius: 19px;
    box-shadow: 33px 10px 48px rgba(0, 0, 0, 0.15),
      inset 12px 8px 16px rgba(231, 180, 180, 0.78),
      inset -12px -8px 16px rgba(231, 180, 180, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-weight: 600;
    line-height: 24px;
  }

  @media screen and (min-width: ${lg}) {
    margin: 2em 0 0 10em;
    a {
      width: 205px;
      height: 55px;
      font-size: 1.4rem;
    }
  }
`;

export const HeroLinkImgContainer = styled.div`
  position: relative;
  width: 1rem;
  height: 1rem;
  margin-right: 0.5rem;

  @media screen and (min-width: ${lg}) {
    width: 1.4rem;
    height: 1.4rem;
  }
`;
