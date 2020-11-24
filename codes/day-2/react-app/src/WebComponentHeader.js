import React from 'react'

const WebComponentHeader = (args) => {

    const headerStyle = {
        backgroundColor: 'burlywood',
        fontFamily: 'Segoe UI',
        border: '1px solid blue',
        borderRadius: '2px'
    }
    // const headerElement = React.createElement(
    //     'h3',
    //     {
    //         id: 'mainHeader',
    //         style: headerStyle
    //     },
    //     args.headerData
    // );
    // const headerElement = (
    //     <h3 id='mainHeader' style={headerStyle}>
    //         {args.headerData}
    //     </h3>
    // )

    // const valueChildElements = [
    //     React.createElement('br'),
    //     `Value&nbsp;${args.value}`
    // ]

    // const valueElement = React.createElement(
    //     'span',
    //     {
    //         id: 'valueSpan'
    //     },
    //     valueChildElements
    // );

    // const valueElement = (
    //     <span id='valueSpan'>
    //         <br />
    //         Value&nbsp;{args.value}
    //     </span>
    // )

    // const rootElement = React.createElement(
    //     'div',
    //     {
    //         onMouseOver: args.handler
    //     },
    //     [headerElement, valueElement]
    // );

    // const rootElement = (
    //     <div onMouseOver={args.handler}>
    //         {headerElement}
    //         {valueElement}
    //     </div>
    // );


    const rootElement = (
        <div onMouseOver={args.handler}>
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
 *   type:'div',
 *   key:null,
 *   ref:null,
 *   props:{
 *     heraderData:'',
 *     data:10,
 *     handler:sayHi
 *     children:[headerElement, valueElement]
 *   }
 * }
 */