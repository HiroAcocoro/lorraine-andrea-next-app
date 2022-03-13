import styled from "styled-components";

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
`;

export const ProjectsSectionRow = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: ${({ isReverse }) => isReverse && `row-reverse`}; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProjectsSectionProjImg = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  /* left: ${({ left }) => left};
  right: ${({ right }) => right}; */

  span {
    border-radius: 33px;
    box-shadow: 7px 7px 35px 0px rgb(0 0 0 / 25%);
  }
`;
