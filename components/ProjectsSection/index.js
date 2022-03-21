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
            isRotate={project.artImg?.isRotate}
            style={{
              transform: project.artImg.isRotate
                ? `rotate(${scrollY * 0.04}deg)`
                : `translate(${scrollY - vh}px, -${scrollY - vh}px)`,
            }}
          >
            <Image
              alt={project.artImg.alt}
              src={project.artImg.src}
              layout="responsive"
            />
          </ProjectsSectionImgWrapper>
          <a target="_blank" href={project.link} rel="noreferrer">
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
          </a>
        </ProjectsSectionRow>
      ))}
    </ProjectsSectionMainContainer>
  );
};

export default ProjectsSectionComponent;
