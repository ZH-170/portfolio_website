// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".files {\r\n    width: 92.5%;\r\n    height: 300px;\r\n\r\n    /* background: gray; */\r\n    display: flex;\r\n    padding: 10px 50px;\r\n}\r\n\r\n.files-block {\r\n    flex: 1;\r\n    margin: 10px;\r\n    background: white;\r\n    border-radius: 2em;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}