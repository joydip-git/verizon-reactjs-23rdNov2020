import React, { Component } from 'react'

class PersonDetail extends Component {
    constructor() {
        super()
        console.log('[PD] ctor called')
        this.state = {}
    }
    static getDerivedStateFromProps(newProps, previousState) {
        console.log('[PD] getDerivedStateFromProps')
        return null;
    }
    shouldComponentUpdate(newProps, previousState) {
        console.log('[PD] shouldComponentUpdate')
        // console.log(newProps)
        // console.log(this.props)
        if (this.props.personData === newProps.personData)
            return false;
        else
            return true;
    }
    getSnapshotBeforeUpdate(oldProps, previousState) {
        console.log('[PD] getSnapshotBeforeUpdate')
    }
    componentDidUpdate(oldProps, previousState, snapshot) {
        console.log('[PD] componentDidUpdate')
    }
    render() {
        console.log('[PD] rendered')
        console.log(this.props)
        const { personData, updatePerson } = this.props;
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
}

export default PersonDetail
