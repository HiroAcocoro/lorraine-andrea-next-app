import React from "react";
import Image from "next/image";

import ContactImg1 from "../../public/contact-img-1.png";
import ContactImg2 from "../../public/contact-img-2.png";
import ContactImg3 from "../../public/contact-img-3.png";

import Contacts from "../../constants/Contacts";

import {
  ContactFooterImgs,
  ContactImgs,
  ContactSectionBottomDiv,
  ContactSectionImgWrapper,
  ContactSectionMainContainer,
  ContactSectionTitle,
  ContactSectionTitleAlt,
  ContactSectionTopDiv,
  CoontactSectionFooter,
} from "./index.styles";

const ContactSectionComponent = () => {
  return (
    <ContactSectionMainContainer>
      <ContactSectionTopDiv>
        <ContactSectionTitle>
          Let&apos;s&nbsp;
          <ContactSectionTitleAlt>&nbsp;make</ContactSectionTitleAlt>
          &nbsp;something
          <ContactSectionTitleAlt>&nbsp;fun</ContactSectionTitleAlt>
          &nbsp;together!
        </ContactSectionTitle>
      </ContactSectionTopDiv>
      <ContactSectionBottomDiv>
        <ContactSectionImgWrapper width="356px" height="356px">
          <Image src={ContactImg1} alt="" layout="responsive" />
        </ContactSectionImgWrapper>
        <ContactSectionImgWrapper
          width="94px"
          height="94px"
          top="-15vh"
          right="10vw"
        >
          <Image src={ContactImg2} alt="" layout="responsive" />
        </ContactSectionImgWrapper>
      </ContactSectionBottomDiv>
      <CoontactSectionFooter>
        <ContactSectionTitle>
          Hit me
          <ContactSectionTitleAlt>&nbsp;up</ContactSectionTitleAlt>
        </ContactSectionTitle>
        <ContactSectionImgWrapper width="100px" height="100px">
          <Image src={ContactImg3} alt="" layout="responsive" />
        </ContactSectionImgWrapper>
        <ContactFooterImgs>
          <ContactImgs>
            {Contacts.map((contact) => (
              <ContactSectionImgWrapper
                width={contact.width}
                height={contact.height}
                key={contact.id}
              >
                <Image
                  src={contact.src}
                  alt={contact.alt}
                  layout="responsive"
                />
              </ContactSectionImgWrapper>
            ))}
          </ContactImgs>
        </ContactFooterImgs>
      </CoontactSectionFooter>
    </ContactSectionMainContainer>
  );
};

export default ContactSectionComponent;
