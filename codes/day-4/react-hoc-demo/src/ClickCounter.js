import React from 'react'
import withCounter from './withCounter'

let ClickCounter = ({ counterValue, counterHandler }) => {
    return (
        <div>
            Click Counter Value:&nbsp;{counterValue}
            <br />
            <button onClick={counterHandler}>
                Increase Counter By Clicking the Button
                </button>
        </div>
    )
}
ClickCounter = withCounter(ClickCounter)
export default ClickCounter;
