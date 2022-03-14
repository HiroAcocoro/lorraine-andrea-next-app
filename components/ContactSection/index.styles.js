import styled from "styled-components";

import Breakpoints from "../../constants/Breakpoints";

const { lg } = Breakpoints;

export const ContactSectionMainContainer = styled.div``;

export const ContactSectionTopDiv = styled.div`
  @media screen and (min-width: ${lg}) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const ContactSectionTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;

  @media screen and (min-width: ${lg}) {
    font-size: 84px;
    line-height: 76px;
    height: 15vh;
    width: 60vw;
    margin-right: 5vw;
    ${({ lgMod }) => lgMod};
  }
`;

export const ContactSectionTitleAlt = styled.div`
  color: #ff8f8f;
`;

export const ContactSectionImgWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  @media screen and (min-width: ${lg}) {
    width: ${({ width }) => `calc(${width} * 1.5)`};
    height: ${({ height }) => `calc(${height} * 1.5)`};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    ${({ lgMod }) => lgMod};

    @media (-webkit-min-device-pixel-ratio: 1.25) {
      ${({ scale125Mod }) => scale125Mod};
    }
  }
`;

export const CoontactSectionFooter = styled.div``;

export const ContactFooterImgs = styled.div`
  display: flex;
  align-items: center;
`;

export const ContactImgs = styled.div`
  position: relative;
  bottom: 60px;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: ${lg}) {
    bottom: 30vh;
  }
`;
