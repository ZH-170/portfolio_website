import React, {useRef, useEffect, useState} from "../_snowpack/pkg/react.js";
import "./Experiences.css.proxy.js";
import LionDanceImg from "./image/lion-dance-head.jpg.proxy.js";
import EROHSSImg from "./image/EROHSS.jpg.proxy.js";
import SciCampImg from "./image/SciCampImg.jpg.proxy.js";
import MOImg from "./image/MO.jpg.proxy.js";
import liondance1 from "./image/liondance/liondance1.jpg.proxy.js";
import liondance2 from "./image/liondance/liondance2.jpg.proxy.js";
import liondance3 from "./image/liondance/liondance3.jpg.proxy.js";
import liondance4 from "./image/liondance/liondance4.jpg.proxy.js";
import liondance5 from "./image/liondance/liondance5.jpg.proxy.js";
export default function Experiences() {
  const [isPopup1Open, setIsPopup1Open] = useState(false);
  const [isPopup2Open, setIsPopup2Open] = useState(false);
  const [isPopup3Open, setIsPopup3Open] = useState(false);
  const [isPopup4Open, setIsPopup4Open] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleOpenPopup1 = () => {
    setIsPopup1Open(true);
    setIsOverlayOpen(true);
  };
  const handleClosePopup1 = () => {
    setIsPopup1Open(false);
    setIsOverlayOpen(false);
  };
  const handleOpenPopup2 = () => {
    setIsPopup2Open(true);
    setIsOverlayOpen(true);
  };
  const handleClosePopup2 = () => {
    setIsPopup2Open(false);
    setIsOverlayOpen(false);
  };
  const handleOpenPopup3 = () => {
    setIsPopup3Open(true);
    setIsOverlayOpen(true);
  };
  const handleClosePopup3 = () => {
    setIsPopup3Open(false);
    setIsOverlayOpen(false);
  };
  const handleOpenPopup4 = () => {
    setIsPopup4Open(true);
    setIsOverlayOpen(true);
  };
  const handleClosePopup4 = () => {
    setIsPopup4Open(false);
    setIsOverlayOpen(false);
  };
  const handle6anluckIg = () => {
    window.open("https://www.instagram.com/6anluck_/", "_blank");
  };
  const handleDongZong = () => {
    window.open("https://www.dongzong.my/en/home/", "_blank");
  };
  const handleEROHSS = () => {
    window.open("https://www.monash.edu.my/engineering/news-and-events/articles/2024/erohss-shapes-young-minds-for-research", "_blank");
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "big-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Experience"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "Experience-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row1-col-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label1-container inset-shadow",
    onClick: handleOpenPopup1
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label1"
  }, /* @__PURE__ */ React.createElement("h1", null, "Lion Dance"))), /* @__PURE__ */ React.createElement("img", {
    src: LionDanceImg
  })), /* @__PURE__ */ React.createElement("div", {
    className: "row1-col-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label2-container inset-shadow",
    onClick: handleOpenPopup2
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label2"
  }, /* @__PURE__ */ React.createElement("h1", null, "EROHSS Program"))), /* @__PURE__ */ React.createElement("img", {
    src: EROHSSImg
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "Experience-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "row2-col-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label3-container inset-shadow",
    onClick: handleOpenPopup3
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label3"
  }, /* @__PURE__ */ React.createElement("h1", null, "Olympiad Competitions"))), /* @__PURE__ */ React.createElement("img", {
    src: MOImg
  })), /* @__PURE__ */ React.createElement("div", {
    className: "row2-col-right"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label4-container inset-shadow",
    onClick: handleOpenPopup4
  }, /* @__PURE__ */ React.createElement("div", {
    className: "label4"
  }, /* @__PURE__ */ React.createElement("h1", null, "MICSS SC"))), /* @__PURE__ */ React.createElement("img", {
    src: SciCampImg
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "Experience-popup"
  }, isPopup1Open && /* @__PURE__ */ React.createElement("div", {
    className: "popup1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-title"
  }, "Lion Dance"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handleClosePopup1
  }, "×")), /* @__PURE__ */ React.createElement("div", {
    className: "popup-body"
  }, /* @__PURE__ */ React.createElement("img", {
    src: liondance3,
    className: "popup-img"
  }), /* @__PURE__ */ React.createElement("img", {
    src: liondance4,
    className: "popup-img"
  }), /* @__PURE__ */ React.createElement("img", {
    src: liondance5,
    className: "popup-img"
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "The lion dance performance is a Chinese tradition in my country and is often seen during the Lunar New Year. At my high school, the lion dance troupe is an important annual tradition. Starting at the end of the previous year, students are recruited and undergo daily training in teams for three to four months. During the Lunar New Year, the troupe performs outside of school to raise funds, making it an iconic event for our school."), /* @__PURE__ */ React.createElement("p", null, "In the year end of 2022, I have participated in this event, and that brings a lot of memorable experience to me. At the first time when I met my teammates, we were all strangers from different classes and different age, scarcely seen each other in school. However, after months of training together, we became as close as siblings, as close as brothers. We trained together, played together, ate together. They are the one that I love and I trust by the time. During the tough training, I gained persistence. Tough trainings will always make us to have the idea of giving up, but after taking a look at my teammates, seeing some of them that are younger than me still insisting, and that’s when the idea of giving up disappears, and all that left is the motivation and encouragement of my teammates."), /* @__PURE__ */ React.createElement("p", null, "At the beginning of 2023, during the Lunar New Year, my team went outside the school, started our performance at all kinds of houses and restaurants and companies for 15 days, 5 to 8 performance a day. "), /* @__PURE__ */ React.createElement("div", {
    className: "popup-more-info",
    onClick: handle6anluckIg
  }, "Instagram"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("img", {
    src: liondance1,
    className: "popup-img"
  }), /* @__PURE__ */ React.createElement("img", {
    src: liondance2,
    className: "popup-img"
  }))), isPopup2Open && /* @__PURE__ */ React.createElement("div", {
    className: "popup1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-title"
  }, "EROHSS Program"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handleClosePopup2
  }, "×")), /* @__PURE__ */ React.createElement("div", {
    className: "popup-body"
  }, /* @__PURE__ */ React.createElement("p", null, "In 2023, I had the opportunity to participate in the Engineering Research Opportunities for High School Students (EROHSS) program at Monash University Malaysia. This initiative offers high school students hands-on experience in university-level research, covering topics from renewable energy to advanced nanomaterials."), /* @__PURE__ */ React.createElement("p", null, 'Given the competitive nature of the program, with only three spots allocated to my school, I was honored to be selected after a rigorous interview process. Assigned to the Department of Chemical Engineering, I worked under the guidance of Ms. Sia Chin Siew on a project titled "Magnetic-Controllable Pickering Emulsion: Futuristic Platform for Drug Delivery." This study focused on developing emulsions stabilized by magnetic nanoparticles to control drug release rates using external magnetic fields.'), /* @__PURE__ */ React.createElement("p", null, "Before stepping into the lab, I dedicated time to thoroughly understand the research paper associated with my project. I delved into every detail, familiarizing myself with new terminologies and concepts, and prepared a list of questions to discuss with my supervisor."), /* @__PURE__ */ React.createElement("p", null, "On the lab day, the environment was both exhilarating and enlightening. Under Ms. Sia's supervision, I was introduced to advanced equipment and techniques, many of which were new to me. The hands-on experience deepened my appreciation for experimental research, and I successfully replicated the study's results, confirming the potential of magnetic Pickering emulsions in controlled drug delivery."), /* @__PURE__ */ React.createElement("p", null, "Following the experimental phase, I faced the challenge of composing my first full-length research paper and preparing a presentation. Despite initial difficulties, I completed these tasks before the deadline. Presenting my findings to an audience was initially daunting, but as I progressed, my confidence grew, and I delivered a coherent and engaging presentation. The program concluded with a ceremony where I received a participation certificate, marking the end of a transformative journey."), /* @__PURE__ */ React.createElement("p", null, "This experience has been pivotal in solidifying my passion for scientific inquiry and has inspired me to pursue further opportunities in research and experimentation."), /* @__PURE__ */ React.createElement("div", {
    className: "popup-more-info",
    onClick: handleEROHSS
  }, "EROHSS"))), isPopup3Open && /* @__PURE__ */ React.createElement("div", {
    className: "popup1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-title"
  }, "Olympiad Competitions"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handleClosePopup3
  }, "×")), /* @__PURE__ */ React.createElement("div", {
    className: "popup-body"
  }, /* @__PURE__ */ React.createElement("h1", null, "Halo"), /* @__PURE__ */ React.createElement("p", null, "This is a text."))), isPopup4Open && /* @__PURE__ */ React.createElement("div", {
    className: "popup1"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "popup-title"
  }, "MICSS Science Camp"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handleClosePopup4
  }, "×")), /* @__PURE__ */ React.createElement("div", {
    className: "popup-body"
  }, /* @__PURE__ */ React.createElement("p", null, "The MICSS Science Camp is an annual event organized by Dong Zong, involving most of the top Chinese independent schools in Malaysia. Each year, the camp has a main theme and corresponding subject(s), and each school can send up to six representatives who have demonstrated outstanding performance in those subjects. The representatives gather at the hosting school and spend five days and four nights participating in the camp. The event features knowledge-sharing sessions conducted by professors in the respective fields, as well as competitions where students can showcase their abilities. However, due to the pandemic, the camp was canceled for several years before finally resuming in 2023."), /* @__PURE__ */ React.createElement("div", {
    className: "popup-more-info",
    onClick: handleDongZong
  }, "DongZong")))), isOverlayOpen && /* @__PURE__ */ React.createElement("div", {
    id: "overlay"
  }))));
}
