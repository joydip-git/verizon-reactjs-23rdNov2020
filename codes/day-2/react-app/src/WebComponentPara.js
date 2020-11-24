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
    
    const paraElement = (
        <p id='contentPara' style={paraStyle} onClick={args.caller}>
            {args.paraData}
        </p>
    )

    return paraElement;
}
export default WebComponentPara;