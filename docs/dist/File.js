import React from "../_snowpack/pkg/react.js";
import "./File.css.proxy.js";
export default function File() {
  const openAPIO = () => {
    const pdfUrl = "https://drive.google.com/file/d/141k8BWmk2lc8J9QVfzGvWmNzVJKfRTZ5/view?usp=sharing";
    window.open(pdfUrl, "_blank");
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "files"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "files-block"
  }, "UPSR && Junior Uec"), /* @__PURE__ */ React.createElement("div", {
    className: "files-block"
  }, "UEC"), /* @__PURE__ */ React.createElement("div", {
    className: "files-block"
  }, "UCE"), /* @__PURE__ */ React.createElement("div", {
    className: "files-block",
    onClick: openAPIO
  }, "APIO"), /* @__PURE__ */ React.createElement("div", {
    className: "files-block"
  }, "MCO"), /* @__PURE__ */ React.createElement("div", {
    className: "files-block"
  }, "BIMO")));
}
