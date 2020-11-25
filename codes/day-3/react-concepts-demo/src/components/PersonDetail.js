import React from 'react'

function PersonDetail(props) {
    const { personData, updatePerson } = props;
    const inputBackColor = {
        backgroundColor: 'burlywood',
        color: 'black'
    }
    // const passPersonData = (event) => {
    //     updatePerson(event.target.value)
    // }
    return (
        <table style={{ margin: '10px' }}>
            <tr>
                <td>Name:&nbsp;</td>
                <td>
                    <input
                        type='text'
                        value={personData.name}
                        style={inputBackColor}
                        onChange={(event) => updatePerson(personData.id, 'name', event.target.value)} /></td>
            </tr>
            <tr>
                <td>Age:&nbsp;</td>
                <td>
                    <input
                        type='text'
                        value={personData.age}
                        style={inputBackColor}
                        onChange={(event) => updatePerson(personData.id, 'age', parseInt(event.target.value))}
                    />
                </td>
            </tr>
            <tr>
                <td>Location:&nbsp;</td>
                <td><input
                    type='text'
                    value={personData.location}
                    style={inputBackColor}
                    onChange={(event) => updatePerson(personData.id, 'location', event.target.value)}
                />
                </td>
            </tr>
        </table>
    )
}

export default PersonDetail
