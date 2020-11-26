import React from 'react'
import PropTypes from 'prop-types'


const ClickCounter = ({ counterValue, handler, data }) => {
    return (
        <div>
            Data:&nbsp;{data}
            <br />
            Click Counter Value:&nbsp;
            {counterValue}
            <br />
            <button onClick={() => handler(10)}>Click the Button to increase Value</button>
            <br />
            {/* {
                this.sayHi()
            } */}
        </div>
    )
}

ClickCounter.propTypes = {
    data: PropTypes.number.isRequired,
    counterValue: PropTypes.number.isRequired,
    handler: PropTypes.func.isRequired
}
//Object.assign(ClickCounter.prototype, utility)
export default ClickCounter
