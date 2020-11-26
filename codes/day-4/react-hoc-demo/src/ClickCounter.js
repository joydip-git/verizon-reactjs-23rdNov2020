import React from 'react'
import withCounter from './withCounter'

let ClickCounter = ({ counterValue, counterHandler, data }) => {
    return (
        <div>
            Data:&nbsp;{data}
            <br />
            Click Counter Value:&nbsp;{counterValue}
            <br />
            <button onClick={counterHandler}>
                Increase Counter By Clicking the Button
                </button>
        </div>
    )
}
ClickCounter = withCounter(ClickCounter, 100)
export default ClickCounter;
