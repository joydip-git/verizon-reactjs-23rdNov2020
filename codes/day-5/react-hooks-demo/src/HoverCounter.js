import React from 'react'
import useCounter from './useCounter'

const HoverCounter = ({ value }) => {
    const [counterValue, counterHandler] = useCounter(100)
    return (
        <div>
            Value:&nbsp;{value}
            <br />
            Hover Counter Value:&nbsp;{counterValue}
            <br />
            <span onMouseOver={counterHandler}>Increase Counter by hovering</span>
        </div>
    )
}

export default HoverCounter
