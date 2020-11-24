import React from 'react'

const WebComponentPara = (args) => {

    const paraStyle = {
        backgroundColor: 'beige',
        fontFamily: 'Segoe UI',
        fontSize: 'medium',
        border: '1px solid blue',
        borderRadius: '2px',
        margin: '10px'
    }

    const paraElement = React.createElement(
        'p',
        {
            id: 'contentPara',
            onClick: args.caller,
            style: paraStyle
        },
        args.paraData);

    return paraElement;
}
export default WebComponentPara;