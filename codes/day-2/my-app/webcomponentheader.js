define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  //webcomponentheader function => component
  //headerElement=> content
  var webcomponentheader = function webcomponentheader(args) {
    //data
    //const headerContent = args.headerData;
    //style
    var headerStyle = {
      backgroundColor: 'burlywood',
      fontFamily: 'Segoe UI',
      border: '1px solid blue',
      borderRadius: '2px'
    }; //elements

    var headerElement = document.createElement('h3'); //element style
    //headerElement.style = headerStyle;

    headerElement.style.backgroundColor = 'burlywood';
    headerElement.style.fontFamily = 'Segoe UI';
    headerElement.style.border = '1px solid blue';
    headerElement.style.borderRadius = '2px';
    headerElement.style.margin = '10px';
    headerElement.style.textAlign = 'center'; //element content
    //headerElement.innerHTML = headerContent;

    headerElement.innerHTML = args.headerData;
    var valueElement = document.createElement('span');
    valueElement.style.textAlign = 'center';
    valueElement.innerHTML = "<br/>Value:&nbsp;".concat(args.value);
    var rootElement = document.createElement('div');
    rootElement.appendChild(headerElement);
    rootElement.appendChild(valueElement);
    rootElement.addEventListener('mouseover', args.handler);
    return rootElement;
  };

  var _default = webcomponentheader;
  _exports["default"] = _default;
});