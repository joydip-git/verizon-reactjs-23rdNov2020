import React from 'react'
import withCounter from './withCounter'

let HoverCounter = ({ counterValue, counterHandler, value }) => {

    return (
        <div>
            Value:&nbsp;{value}
            <br />
            Hover Counter Value:&nbsp;{counterValue}
            <br />
            <span onMouseOver={counterHandler} style={{ backgroundColor: 'aquamarine', border: '1px solid red', width: '100px' }}>
                Increase Counter By Hovering this Span
                </span>
        </div>
    )

}
HoverCounter = withCounter(HoverCounter, 200);
export default HoverCounter;