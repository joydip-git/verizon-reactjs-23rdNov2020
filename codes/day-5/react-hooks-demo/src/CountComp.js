import React from 'react'
import PropTypes from 'prop-types'

const CountComp = ({ countValue }) => {
    console.log('[CC] rendered')
    return (
        <div>
            count value: &nbsp;{countValue}
        </div>
    )
}

CountComp.propTypes = {
    countValue: PropTypes.number.isRequired
}

export default CountComp
