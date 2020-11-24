import React from 'react'

/**
 * args = {
 * headerData:'',
 * value:10,
 * handler:incresaeCountHandler
 * }
 */
const WebComponentHeader = (args) => {
    //properties are immutable
    //args.value = args.value + 1;
    //let x = args.value + 1;
    const headerStyle = {
        backgroundColor: 'burlywood',
        fontFamily: 'Segoe UI',
        border: '1px solid blue',
        borderRadius: '2px'
    }
    const headerMessage = 'message from header component';
    const rootElement = (
        <div onClick={args.handler}>
            <h3 id='mainHeader' style={headerStyle}>
                {args.headerData}
            </h3>
            <br />
            <span id='valueSpan'>
                Value&nbsp;{args.value}
            </span>
        </div>
    );

    return rootElement;
}
export default WebComponentHeader;

/**
 * {
 * type:'div',
 * props:{
 *  headerData:'',
 *  value:10,
 *  handler:sayHi,
 *  children:[<h3 id='mainHeader' style={headerStyle}>
                {args.headerData}
            </h3>
            <br />
            <span id='valueSpan'>
                Value&nbsp;{args.value}
            </span>]
 * }
 * }
 *
 * //new react element
 * {
 * type:'div',
 * props:{
 *  headerData:'Introduction to React JS',
 *  value:10,
 *  handler:sayHi,
 *  children:[<h3 id='mainHeader' style={headerStyle}>
                {args.headerData}
            </h3>
            <br />
            <span id='valueSpan'>
                Value&nbsp;{args.value}
            </span>]
 * }
 * }
 */