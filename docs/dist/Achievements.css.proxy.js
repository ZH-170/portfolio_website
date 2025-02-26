// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "\r\n\r\n.achievements {\r\n    width: 70%;\r\n    background-color: white;\r\n    text-align: center;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    padding: 10px;\r\n    margin-bottom: 25px;\r\n    flex: 1;\r\n    border: 0.5px solid gray;\r\n}\r\n\r\n.achievement-block:hover .achievement{\r\n    opacity: 0.5;\r\n    width: 70%;\r\n    background-color: white;\r\n    text-align: center;\r\n    box-shadow: 0 4px 8px 0C 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    padding: 5px;\r\n    flex: 1;\r\n}\r\n.achievement {\r\n    width: 70%;\r\n    text-align: center;\r\n    padding: 5px;\r\n    flex: 1;\r\n    border: 0.5px solid black;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.certs {\r\n    width: 100px;\r\n}\r\n\r\n.block:hover .achievements {\r\n    opacity: 0.5;\r\n    width: 80%;\r\n    background-color: white;\r\n    text-align: center;\r\n    box-shadow: 0 4px 8px 0C 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    padding: 10px;\r\n    margin-bottom: 25px;\r\n    flex: 1;\r\n}\r\n\r\n.achievements-container {\r\n    text-align: center;\r\n    padding: 1px 1px;\r\n}\r\n\r\n.all-achievements {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n    gap: 1px;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n}\r\n\r\n.all-achievement-blocks {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr;\r\n    background-color: lightgray;\r\n    padding: 10px;\r\n}\r\n\r\n.achievement{\r\n    background-color: gray;\r\n}\r\n\r\n.Achievements-timeline {\r\n    position: relative;\r\n    max-width: 1450px;\r\n    margin: 100px auto;\r\n}\r\n\r\n.Achievements-timeline-container {\r\n    padding: 10px 50px;\r\n    position: relative;\r\n    width: 50%;\r\n    animation: movedown 1s linear forwards;\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.Achievements-timeline-container:nth-child(1) {\r\n    animation-delay: 0s;\r\n}\r\n.Achievements-timeline-container:nth-child(2) {\r\n    animation-delay: 1s;\r\n}\r\n.Achievements-timeline-container:nth-child(3) {\r\n    animation-delay: 2s;\r\n}\r\n.Achievements-timeline-container:nth-child(4) {\r\n    animation-delay: 3s;\r\n}\r\n.Achievements-timeline-container:nth-child(5) {\r\n    animation-delay: 4s;\r\n}\r\n.Achievements-timeline-container:nth-child(6) {\r\n    animation-delay: 5s;\r\n}\r\n\r\n\r\n@keyframes movedown {\r\n    0%{\r\n        opacity: 1;\r\n        transform: translateY(-30px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n        transform: translateY(0px);\r\n    }\r\n}\r\n\r\n.Achievements-timeline-container-textbox {\r\n    padding: 20px 20px;\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 6px;\r\n    font-size: 15px;\r\n    \r\n}\r\n\r\n.left-container {\r\n    left: -100px;\r\n}\r\n\r\n.right-container {\r\n    left: 50%;\r\n}\r\n\r\n.small-icon{\r\n    position: absolute;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    right: -20px;\r\n    top: 32px;\r\n    z-index: 10;\r\n}\r\n\r\n.right-container img{\r\n    left: -20px;\r\n}\r\n\r\n.Achievements-timeline::after {\r\n    content: '';\r\n    position: absolute;\r\n    width: 6px;\r\n    height: 100%;\r\n    background: #fff;\r\n    top: 0;\r\n    left: 50%;\r\n    margin-left: -3px;\r\n    z-index: -0;\r\n    animation: moveline 6s linear forwards;\r\n}\r\n\r\n@keyframes moveline {\r\n    0%{\r\n        height: 0;\r\n    }\r\n    100%{\r\n        height: 100%\r\n    }\r\n}\r\n\r\n.Achievements-timeline-container-textbox h2 {\r\n    font-weight: 600;\r\n}\r\n\r\n.Achievements-timeline-container-textbox small {\r\n    display: inline-block;\r\n}\r\n\r\n\r\n.left-container-arrow {\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    top: 29px;\r\n    z-index: 1;\r\n    border-top: 15px solid transparent;\r\n    border-bottom: 15px solid transparent;\r\n    border-left: 15px solid white;\r\n    right: -14px;\r\n}\r\n\r\n.right-container-arrow {\r\n    height: 0;\r\n    width: 0;\r\n    position: absolute;\r\n    top: 29px;\r\n    z-index: 1;\r\n    border-top: 15px solid transparent;\r\n    border-bottom: 15px solid transparent;\r\n    border-right: 15px solid white;\r\n    left: -14px;\r\n}\r\n\r\n@media screen and (max-width: 600px){\r\n    .Achievements-timeline {\r\n        margin: 50px auto;\r\n    }\r\n\r\n    .Achievements-timeline::after{\r\n        left: 31px;\r\n    }\r\n\r\n    .Achievements-timeline-container{\r\n        width: 100%;\r\n        padding-left: 80px;\r\n        padding-right: 25px;\r\n    }\r\n\r\n    .Achievements-timeline-container-textbox {\r\n        font-size: 13px;\r\n\r\n    }\r\n\r\n    .Achievements-timeline-container-textbox small{\r\n        font-size: 10px;\r\n\r\n    }\r\n\r\n    .right-container {\r\n        left: 0;\r\n    }\r\n\r\n    .left-container img, .right-container img {\r\n        left: 10px;\r\n\r\n        \r\n    }\r\n\r\n    .left-container-arrow, .right-container-arrow{\r\n        border-right: 15px solid #fff;\r\n        border-left: 0;\r\n        left: -15px;\r\n    }\r\n\r\n} ";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}