import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'

//const appReactElementObj = App();

// const appObj = new App();
//appObj.props={randomValue:100}
// const appReactElementObj = appObj.render();

// ReactDOM.render(appReactElementObj, document.getElementById('root'))

/*
const appElement = <App randomValue={100} />;
console.log(appElement)
ReactDOM.render(appElement, document.getElementById('root'))
*/
ReactDOM.render(<App randomValue={100} />, document.getElementById('root'))
/**
 * {
 * type:'article',
 * props:{
 * randomValue:100
 * children:[{},{},{}]
 * }
 * }
 */