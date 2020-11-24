define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  var webcomponentpara = function webcomponentpara() {
    var paraContent = "Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.\n\n    Web components are based on existing web standards. Features to support web components are currently being added to the HTML and DOM specs, letting web developers easily extend HTML with new elements with encapsulated styling and custom behavior.";
    var paraElement = document.createElement('p', {
      id: 'contentPara'
    }); // const paraStyle = {
    //     backgroundColor: 'beige',
    //     fontFamily: 'Segoe UI',
    //     fontSize: 'medium',
    //     border: '1px solid blue',
    //     borderRadius: '2px',
    //     margin: '10px'
    // }
    //paraElement.style = paraStyle;

    paraElement.style.backgroundColor = 'beige';
    paraElement.style.fontFamily = 'Segoe UI';
    paraElement.style.fontSize = 'medium';
    paraElement.style.border = '1px solid blue';
    paraElement.style.borderRadius = '2px';
    paraElement.style.margin = '10px';
    paraElement.innerHTML = paraContent;
    return paraElement;
  };

  var _default = webcomponentpara;
  _exports["default"] = _default;
});