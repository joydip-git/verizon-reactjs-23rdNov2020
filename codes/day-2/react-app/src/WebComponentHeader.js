import React from 'react'

/**
 * args = {
 * headerData:'',
 * value:10,
 * handler:sayHi
 * }
 */
const WebComponentHeader = (args) => {

    const headerStyle = {
        backgroundColor: 'burlywood',
        fontFamily: 'Segoe UI',
        border: '1px solid blue',
        borderRadius: '2px'
    }
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