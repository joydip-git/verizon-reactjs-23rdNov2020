import React from 'react'
import withMemo from './withMemo'

const MemoComp = ({ value, person }) => {
    console.log('[MC] rendered')
    return (
        <div>
            Value:&nbsp;
            {value}
            <br />
            Name:&nbsp;{person.name === '' ? 'no name' : person.name}
        </div>
    )
}

export default withMemo(MemoComp)
