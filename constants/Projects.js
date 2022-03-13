import ProjectImg1 from "../public/projects-img-1.png";
import ProjectImg2 from "../public/projects-img-2.png";
import ProjectImg3 from "../public/projects-img-3.png";
import EbisuImg from "../public/ebisu-img.png";
import ChatappImg from "../public/chatapp-img.png";
import MmaImg from "../public/mma-img.png";

const ProjWidth = "325px";
const ProjHeight = "300px";

export default [
  {
    id: "ebisu",
    orientation: {
      isReverse: false,
    },
    artImg: {
      src: ProjectImg1,
      alt: "",
      width: "63px",
      height: "105px",
      top: "-12vh",
      left: "-35vw",
    },
    projImg: {
      src: EbisuImg,
      alt: "ebisu-img",
      width: ProjWidth,
      height: ProjHeight,
      left: `20vw`,
    },
  },
  {
    id: "chatapp",
    orientation: {
      isReverse: true,
    },
    artImg: {
      src: ProjectImg2,
      alt: "",
      width: "181.1px",
      height: "181.1px",
      top: "-10vh",
      left: "50vw",
      isRotate: true,
    },
    projImg: {
      src: ChatappImg,
      alt: "chat-img",
      width: ProjWidth,
      height: ProjHeight,
      right: `calc(25vw - ${ProjWidth} / 2)`,
    },
  },
  {
    id: "mma",
    orientation: {
      isReverse: false,
    },
    artImg: {
      src: ProjectImg3,
      alt: "",
      width: "150.1px",
      height: "144.15px",
      top: "-8vh",
      left: "-45vw",
      isRotate: true,
    },
    projImg: {
      src: MmaImg,
      alt: "mma-img",
      width: ProjWidth,
      height: ProjHeight,
      left: `calc(25vw - ${ProjWidth} / 2)`,
    },
  },
];
