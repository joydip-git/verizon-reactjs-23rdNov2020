import React from 'react'

function PersonDetail(props) {
    const { personData } = props;
    const inputBackColor = {
        backgroundColor: 'burlywood'
    }
    return (
        <table style={{ margin: '10px' }}>
            <tr>
                <td>Name:&nbsp;</td>
                <td><input type='text' value={personData.name} style={inputBackColor} /></td>
            </tr>
            <tr>
                <td>Age:&nbsp;</td>
                <td><input type='text' value={personData.age} style={inputBackColor} /></td>
            </tr>
            <tr>
                <td>Location:&nbsp;</td>
                <td><input type='text' value={personData.location} style={inputBackColor} /></td>
            </tr>
        </table>
    )
}

export default PersonDetail
