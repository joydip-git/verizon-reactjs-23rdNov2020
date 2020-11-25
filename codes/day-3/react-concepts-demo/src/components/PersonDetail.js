import React from 'react'

function PersonDetail(props) {
    const { personData } = props;
    const inputBackColor = {
        backgroundColor: 'burlywood',
        color: 'black'
    }
    return (
        <table style={{ margin: '10px' }}>
            <tr>
                <td>Name:&nbsp;</td>
                <td>
                    <input
                        type='text'
                        value={personData.name}
                        style={inputBackColor}
                        onChange={ } /></td>
            </tr>
            <tr>
                <td>Age:&nbsp;</td>
                <td>
                    <input
                        type='text'
                        value={personData.age}
                        style={inputBackColor}
                        onChange={ } />
                </td>
            </tr>
            <tr>
                <td>Location:&nbsp;</td>
                <td><input
                    type='text'
                    value={personData.location}
                    style={inputBackColor}
                    onChange={ } />
                </td>
            </tr>
        </table>
    )
}

export default PersonDetail
