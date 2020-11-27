import React from 'react'
import PropTypes from 'prop-types'

const NameComp = ({ nameValue, updateHandler }) => {
    console.log('[NC] rendered')
    return (
        <div>
            Name:&nbsp;<input type='text' value={nameValue} onChange={(event) => updateHandler(event.target.value)} />
        </div>
    )
}

NameComp.propTypes = {
    nameValue: PropTypes.string.isRequired,
    updateHandler: PropTypes.func.isRequired
}

export default NameComp
