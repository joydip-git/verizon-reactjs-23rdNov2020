define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  //webcomponentheader function => component
  //headerElement=> content
  var webcomponentheader = function webcomponentheader() {
    //data
    var headerContent = 'Introduction to Web Components'; //style

    var headerStyle = {
      backgroundColor: 'burlywood',
      fontFamily: 'Segoe UI',
      border: '1px solid blue',
      borderRadius: '2px'
    }; //element

    var headerElement = document.createElement('h3'); //element style
    //headerElement.style = headerStyle;

    headerElement.style.backgroundColor = 'burlywood';
    headerElement.style.fontFamily = 'Segoe UI';
    headerElement.style.border = '1px solid blue';
    headerElement.style.borderRadius = '2px';
    headerElement.style.margin = '10px';
    headerElement.style.textAlign = 'center'; //element content

    headerElement.innerHTML = headerContent; //element

    return headerElement;
  };

  var _default = webcomponentheader;
  _exports["default"] = _default;
});