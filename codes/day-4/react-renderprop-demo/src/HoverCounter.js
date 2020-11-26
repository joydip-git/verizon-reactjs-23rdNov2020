import React from 'react'
import PropTypes from 'prop-types'

const HoverCounter = ({ counter, counterFn, value }) => {
    return (
        <div>
            Value:&nbsp;{value}
            <br />
            Hover Counter Value:&nbsp;
            {counter}
            <br />
            <span onMouseOver={() => counterFn(5)}>
                Hover the Span to increase Value
            </span>
        </div>
    )
}

HoverCounter.propTypes = {
    value: PropTypes.number.isRequired,
    counter: PropTypes.number.isRequired,
    counterFn: PropTypes.func.isRequired
}

export default HoverCounter
