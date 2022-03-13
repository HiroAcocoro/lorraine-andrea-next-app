import styled from "styled-components";

export const ContactSectionMainContainer = styled.div``;

export const ContactSectionTopDiv = styled.div``;

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
`;

export const ContactSectionTitleAlt = styled.div`
  color: #ff8f8f;
`;

export const ContactSectionBottomDiv = styled.div`
  display: flex;
  flex-directions: column;
  align-items: center;
`;

export const ContactSectionImgWrapper = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
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
`;
