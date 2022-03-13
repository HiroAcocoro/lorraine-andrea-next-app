import React, { useContext } from "react";
import { use100vh } from "react-div-100vh";

import Image from "next/image";

import { ScrollContext } from "../../helpers/ScrollProvider";
import Projects from "../../constants/Projects";

import {
  ProjectsSectionImgWrapper,
  ProjectsSectionProjImg,
  ProjectsSectionMainContainer,
  ProjectsSectionRow,
  ProjectsSectionTitle,
  ProjectsSectionTitleAlt,
} from "./index.styles";

const ProjectsSectionComponent = () => {
  const { scrollY } = useContext(ScrollContext);
  const vh = use100vh();

  return (
    <ProjectsSectionMainContainer>
      <ProjectsSectionTitle>
        My&nbsp;<ProjectsSectionTitleAlt>Projects</ProjectsSectionTitleAlt>
      </ProjectsSectionTitle>
      {Projects.map((project) => (
        <ProjectsSectionRow
          key={project.id}
          isReverse={project.orientation.isReverse}
        >
          <ProjectsSectionImgWrapper
            width={project.artImg.width}
            height={project.artImg.height}
            top={project.artImg.top}
            right={project.artImg?.right}
            left={project.artImg?.left}
            style={{
              transform:
                project.artImg?.isTransform &&
                `translate(${scrollY - vh}px, -${scrollY - vh}px)`,
            }}
          >
            <Image
              alt={project.artImg.alt}
              src={project.artImg.src}
              layout="responsive"
            />
          </ProjectsSectionImgWrapper>
          <ProjectsSectionProjImg
            width={project.projImg.width}
            height={project.projImg.height}
            left={project.projImg.left}
            right={project.projImg.right}
          >
            <Image
              alt={project.projImg.alt}
              src={project.projImg.src}
              layout="responsive"
            />
          </ProjectsSectionProjImg>
        </ProjectsSectionRow>
      ))}
      {/* <ProjectsSectionRow isReverse>
        <ProjectsSectionImgWrapper
          height="233px"
          width="233px"
          right="-15%"
          top="-5vw"
        >
          <Image alt="" src={ProjectsImg2} layout="responsive" />
        </ProjectsSectionImgWrapper>
        <ProjectsSectionProjImg width="250px" height="170px" margin="0 0 0 10%">
          <Image alt="chatapp-img" src={ChatappImg} layout="responsive" />
        </ProjectsSectionProjImg>
      </ProjectsSectionRow>
      <ProjectsSectionRow>
        <ProjectsSectionImgWrapper
          height="233px"
          width="233px"
          left="-15%"
          top="1vw"
        >
          <Image alt="" src={ProjectsImg3} layout="responsive" />
        </ProjectsSectionImgWrapper>
        <ProjectsSectionProjImg
          width="250px"
          height="170px"
          margin="0 15px 0 0"
        >
          <Image alt="chatapp-img" src={MmaImg} layout="responsive" />
        </ProjectsSectionProjImg>
      </ProjectsSectionRow> */}
    </ProjectsSectionMainContainer>
  );
};

export default ProjectsSectionComponent;
