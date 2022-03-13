import React, { useState, useEffect } from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

import Image from "next/image";
import Link from "next/link";

import PurpleDonut1 from "../../public/purple-donut-1.png";
import OrangeSpring1 from "../../public/orange-spring-1.png";
import HeroImg1 from "../../public/hero-img-1.png";
import BsDownload from "../../public/BsDownload.svg";

import {
  HeroLinkContainer,
  HeroLinkImgContainer,
  HeroSectionBackground,
  HeroSectionBackgroundImgContainer,
  HeroSectionContent,
  HeroSectionDescription,
  HeroSectionIntro,
  HeroSectionMainContainer,
  HeroSectionName,
} from "./index.styles";

const HeroSectionComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <HeroSectionMainContainer>
      <MouseParallaxContainer>
        <MouseParallaxChild factorX={0.02} factorY={0.03}>
          <HeroSectionContent scrollY={scrollY}>
            <HeroSectionIntro>Hello, I&apos;m</HeroSectionIntro>
            <HeroSectionName>Lorraine Andrea</HeroSectionName>
            <HeroSectionDescription>UI/UX Designer</HeroSectionDescription>
            <HeroLinkContainer scrollY={scrollY}>
              <Link href="/">
                <a>
                  <HeroLinkImgContainer>
                    <Image
                      src={BsDownload}
                      alt="download-icon"
                      layout="fill"
                      objectFit="cover"
                    />
                  </HeroLinkImgContainer>
                  RESUME
                </a>
              </Link>
            </HeroLinkContainer>
          </HeroSectionContent>
        </MouseParallaxChild>
        <HeroSectionBackground scrollY={scrollY}>
          <HeroSectionBackgroundImgContainer
            top="20%"
            left="30vw"
            height="52px"
            width="52px"
            lgMod="top: 15%"
          >
            <Image alt="" src={PurpleDonut1} layout="responsive" />
          </HeroSectionBackgroundImgContainer>
          <HeroSectionBackgroundImgContainer
            top="60%"
            left="-18vw"
            height="163px"
            width="163px"
            lgMod="left: -12vw"
          >
            <Image alt="" src={OrangeSpring1} layout="responsive" />
          </HeroSectionBackgroundImgContainer>
          <HeroSectionBackgroundImgContainer
            top="55%"
            left="50vw"
            height="246.25px"
            width="198.25px"
            lgMod="top: 20%"
          >
            <Image alt="" src={HeroImg1} layout="responsive" />
          </HeroSectionBackgroundImgContainer>
        </HeroSectionBackground>
      </MouseParallaxContainer>
    </HeroSectionMainContainer>
  );
};

export default HeroSectionComponent;
