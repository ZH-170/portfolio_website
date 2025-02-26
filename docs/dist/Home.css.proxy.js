// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".homePageName h1{\r\n    font-size: 130px; \r\n    text-align: center;\r\n}\r\n\r\n.homePageName h2{\r\n    width: 400px; \r\n    font-size: 50px; \r\n    text-align: center;\r\n}\r\n\r\n.homePageName h4{\r\n    font-size: 20px; \r\n    text-align: center;\r\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}