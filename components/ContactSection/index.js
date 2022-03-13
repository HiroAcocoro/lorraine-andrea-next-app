import React, { useContext } from "react";
import { use100vh } from "react-div-100vh";
import Image from "next/image";

import { ScrollContext } from "../../helpers/ScrollProvider";

import ContactImg1 from "../../public/contact-img-1.png";
import ContactImg2 from "../../public/contact-img-2.png";
import ContactImg3 from "../../public/contact-img-3.png";

import Contacts from "../../constants/Contacts";

import {
  ContactFooterImgs,
  ContactImgs,
  ContactSectionImgWrapper,
  ContactSectionMainContainer,
  ContactSectionTitle,
  ContactSectionTitleAlt,
  ContactSectionTopDiv,
  CoontactSectionFooter,
} from "./index.styles";

const ContactSectionComponent = () => {
  const { scrollY } = useContext(ScrollContext);
  const vh = use100vh();

  return (
    <ContactSectionMainContainer>
      <ContactSectionTopDiv>
        <ContactSectionTitle>
          Let&apos;s
          <ContactSectionTitleAlt>&nbsp;make</ContactSectionTitleAlt>
          &nbsp;something
          <ContactSectionTitleAlt>&nbsp;fun</ContactSectionTitleAlt>
          &nbsp;together!
        </ContactSectionTitle>
        <ContactSectionImgWrapper
          width="356px"
          height="356px"
          style={{
            transform: `translate(${scrollY - vh * 5.25}px, -${
              scrollY - vh * 5.25
            }px)`,
          }}
        >
          <Image src={ContactImg1} alt="" layout="responsive" />
        </ContactSectionImgWrapper>
        <ContactSectionImgWrapper
          width="94px"
          height="94px"
          top="-45vh"
          left="75vw"
          lgMod="left: 70vw; top: 20vh;"
        >
          <Image src={ContactImg2} alt="" layout="responsive" />
        </ContactSectionImgWrapper>
      </ContactSectionTopDiv>
      <CoontactSectionFooter>
        <ContactSectionTitle lgMod="margin: 5vh 0 0 0; width: 100%;">
          Hit me
          <ContactSectionTitleAlt>&nbsp;up</ContactSectionTitleAlt>
        </ContactSectionTitle>
        <ContactSectionImgWrapper
          width="100px"
          height="100px"
          lgMod="width: 480px; height: 480px"
        >
          <Image src={ContactImg3} alt="" layout="responsive" />
        </ContactSectionImgWrapper>
        <ContactFooterImgs>
          <ContactImgs>
            {Contacts.map((contact) => (
              <ContactSectionImgWrapper
                width={contact.width}
                height={contact.height}
                lgMod="height: 100px; width: 100px;"
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
