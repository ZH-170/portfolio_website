import React, {useRef, useEffect, useState} from "../_snowpack/pkg/react.js";
import "./AboutMe.css.proxy.js";
import SelfImg from "./image/Y-19353-2-edited.jpg.proxy.js";
export default function AboutMe() {
  const educationBackground = [
    {schoolName: "SJK(C) Hin Hua", educationLevel: "Primary Education", firstYear: "standard 1", lastYear: "standard 6", startAge: "7", endAge: "12", url: "https://sjkchinhuaklang.wordpress.com/"},
    {schoolName: "Hin Hua High School", educationLevel: "Junior Secondary Education", firstYear: "Junior 1", lastYear: "Junior 3", startAge: "13", endAge: "15", url: "https://hinhua.edu.my/cn/index.html"},
    {schoolName: "Hin Hua High School", educationLevel: "Senior Secondary Education", firstYear: "Senior 1", lastYear: "Senior 3", startAge: "16", endAge: "18", url: "https://hinhua.edu.my/cn/index.html"}
  ];
  const [activeIndex, setActiveIndex] = useState(2);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const clickSecondaryEducationEng = () => {
    window.open("https://hinhua.edu.my/eng/home.html", "_blank");
  };
  const clickSecondaryEducationChn = () => {
    window.open("https://hinhua.edu.my/cn/index.html", "_blank");
  };
  const clickPrimaryEducation = () => {
    window.open("https://sjkchinhuaklang.wordpress.com/", "_blank");
  };
  return /* @__PURE__ */ React.createElement("section", {
    id: "aboutMe"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "AboutMe-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "selfIntro"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "selfIntroInfo"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "selfIntroText"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "selfIntroInfo-title"
  }, "Who Am I?"), /* @__PURE__ */ React.createElement("div", {
    className: "selfIntroInfo-text-container"
  }, /* @__PURE__ */ React.createElement("p", null, "High-achieving student at Hin Hua High School with a strong passion for Life Science and Computer Science. A highly diligent and organized individual, actively engaged in competitive programming, with advanced skills in C++, as well as in other science competitions. Eager to delve deeper in both of the field of computer science and biochemistry."))), /* @__PURE__ */ React.createElement("h1", {
    className: "selfIntroInfo-title"
  }, "Education"), /* @__PURE__ */ React.createElement("div", {
    className: "education-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "primary-education"
  }, /* @__PURE__ */ React.createElement("p", null, "Primary Education: 2013~2018"), /* @__PURE__ */ React.createElement("h1", null, "SJK(C) Hin Hua"), /* @__PURE__ */ React.createElement("a", {
    onClick: clickPrimaryEducation
  }, "This website doesn't have an English version.")), /* @__PURE__ */ React.createElement("div", {
    className: "secondary-education"
  }, /* @__PURE__ */ React.createElement("p", null, "Secondary Education: 2019~2024"), /* @__PURE__ */ React.createElement("h1", null, "Hin Hua High School"), /* @__PURE__ */ React.createElement("a", {
    onClick: clickSecondaryEducationEng
  }, "English  /  "), /* @__PURE__ */ React.createElement("a", {
    onClick: clickSecondaryEducationChn
  }, "    Chinese")))), /* @__PURE__ */ React.createElement("img", {
    className: "selfIntroImg",
    src: SelfImg
  })), /* @__PURE__ */ React.createElement("div", {
    className: "Education"
  })));
}
