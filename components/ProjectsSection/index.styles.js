import styled from "styled-components";

import Breakpoints from "../../constants/Breakpoints";

const { lg } = Breakpoints;

export const ProjectsSectionMainContainer = styled.div`
  width: 100vw;
  overflow: visible !important;
`;

export const ProjectsSectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  font-size: 29px;
  line-height: 36px;
  letter-spacing: 1px;
  color: #ffffff;
  margin-bottom: 7rem;

  @media screen and (min-width: ${lg}) {
    margin-top: 15vh;
    font-size: 88px;
  }
`;

export const ProjectsSectionTitleAlt = styled.div`
  color: #ff8f8f;
`;

export const ProjectsSectionImgWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  transition: ${({ isRotate }) =>
    isRotate
      ? `all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)`
      : `all 2s cubic-bezier(0.645, 0.045, 0.355, 1)`};

  @media screen and (min-width: ${lg}) {
    width: ${({ width }) => `calc(${width} * 3)`};
    height: ${({ height }) => `calc(${height} * 3)`};
    top: ${({ top }) => `calc(${top} * 0.9)`};
    left: ${({ left }) => `calc(${left} * 0.9)`};
    right: ${({ right }) => `calc(${right} * 0.9)`};
  }
`;

export const ProjectsSectionRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectsSectionProjImg = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  @media screen and (min-width: ${lg}) {
    width: ${({ width }) => `calc(${width} * 3)`};
    height: ${({ height }) => `calc(${height} * 3)`};
  }

  span {
    border-radius: 33px;
    box-shadow: 7px 7px 35px 0px rgb(0 0 0 / 25%);
  }
`;
