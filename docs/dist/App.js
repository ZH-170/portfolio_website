import React, {useRef, useState} from "../_snowpack/pkg/react.js";
import ReactDOM from "../_snowpack/pkg/react-dom.js";
import Zoom from "../_snowpack/pkg/react-reveal/Zoom.js";
import Slide from "../_snowpack/pkg/react-reveal/Slide.js";
import Fade from "../_snowpack/pkg/react-reveal/Fade.js";
import Contact from "./Contact.js";
import Skills from "./Skills.js";
import Experiences from "./Experiences.js";
import Achievements from "./Achievements.js";
import File from "./File.js";
import "./App.css.proxy.js";
import AboutMe from "./AboutMe.js";
import Home from "./Home.js";
import MenuIcon from "./image/d3d9d4_menu.png.proxy.js";
export default function App() {
  const HomeRef = useRef(null);
  const AboutMeRef = useRef(null);
  const SkillsRef = useRef(null);
  const ExperienceRef = useRef(null);
  const ContactRef = useRef(null);
  const FileRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behavior: "smooth"});
  };
  const [isNavBarOpen, setIsNavBarOpen] = useState(false);
  const handleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "app-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "NavBar",
    onClick: handleNavBar
  }, /* @__PURE__ */ React.createElement("img", {
    className: "NavBar-icon",
    src: MenuIcon
  })), isNavBarOpen && /* @__PURE__ */ React.createElement(Fade, null, /* @__PURE__ */ React.createElement("div", {
    className: "navigation-bar navbar-fade-out"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "nav-btn",
    onClick: () => scrollToSection(HomeRef)
  }, "Home"), /* @__PURE__ */ React.createElement("div", {
    className: "nav-btn",
    onClick: () => scrollToSection(AboutMeRef)
  }, "About"), /* @__PURE__ */ React.createElement("div", {
    className: "nav-btn",
    onClick: () => scrollToSection(SkillsRef)
  }, "Skills"), /* @__PURE__ */ React.createElement("div", {
    className: "nav-btn",
    onClick: () => scrollToSection(ExperienceRef)
  }, "Experience"), /* @__PURE__ */ React.createElement("div", {
    className: "nav-btn",
    onClick: () => scrollToSection(FileRef)
  }, "Files"), /* @__PURE__ */ React.createElement("div", {
    className: "nav-btn",
    onClick: () => scrollToSection(ContactRef)
  }, "Contact"))), /* @__PURE__ */ React.createElement("div", {
    ref: HomeRef,
    className: "Home app"
  }, /* @__PURE__ */ React.createElement(Home, null)), /* @__PURE__ */ React.createElement("div", {
    ref: AboutMeRef,
    className: "AboutMe app"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "div-title"
  }, "About Me"), /* @__PURE__ */ React.createElement(AboutMe, null)), /* @__PURE__ */ React.createElement("div", {
    ref: SkillsRef,
    className: "Skills app"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "div-title"
  }, "Skills"), /* @__PURE__ */ React.createElement(Skills, null)), /* @__PURE__ */ React.createElement("div", {
    ref: ExperienceRef,
    className: "Experience app"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "div-title"
  }, "Experiences"), /* @__PURE__ */ React.createElement(Experiences, null)), /* @__PURE__ */ React.createElement("div", {
    className: "Achievements app"
  }), /* @__PURE__ */ React.createElement("div", {
    ref: FileRef,
    className: "File app"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "div-title"
  }, "Supporting Documents"), /* @__PURE__ */ React.createElement(File, null)), /* @__PURE__ */ React.createElement("div", {
    ref: ContactRef,
    className: "Contact app"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "div-title"
  }, "Contact Me"), /* @__PURE__ */ React.createElement(Contact, null))));
}
