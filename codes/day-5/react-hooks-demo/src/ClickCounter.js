import React from 'react'
import useCounter from './useCounter'

const ClickCounter = ({ data }) => {
    const [counterValue, counterHandler] = useCounter()
    return (
        <div>
            Data Value:&nbsp;{data}
            <br />
            Click Counter Value:&nbsp;{counterValue}
            <br />
            <button onClick={counterHandler}>Increase Counter</button>
        </div>
    )
}

export default ClickCounter
