import React, { Component, PureComponent } from 'react'
import { getPersonById } from '../data/peopleData'

class PersonDetail extends Component {
    constructor() {
        super()
        console.log('[PD] ctor called')
        this.state = {
            person: null,
            loading: true
        }
    }
    static getDerivedStateFromProps(newProps, previousState) {
        console.log('[PD] getDerivedStateFromProps')
        return null;
    }

    // shouldComponentUpdate(newProps, newState) {
    //     console.log('[PD] shouldComponentUpdate')

    //     //console.log(this.props)
    //     //console.log(this.state)

    //     // if (this.props.peronData !== newProps.personData || this.state.person === null) {
    //     //     return true;
    //     // }
    //     // else return false;
    //     //console.log(newProps)
    //     //console.log(newState)

    // }

    getSnapshotBeforeUpdate(oldProps, previousState) {
        console.log('[PD] getSnapshotBeforeUpdate')
    }
    componentDidUpdate(oldProps, previousState, snapshot) {
        console.log('[PD] componentDidUpdate')
        if (oldProps.personData !== this.props.personData) {
            this.getData()
        }
    }
    getData = () => {
        let foundPerson = getPersonById(this.props.personData)
        if (foundPerson !== undefined) {
            this.setState({
                person: foundPerson
            })
        }
    }
    componentDidMount() {
        console.log('[PD] mounted')
        console.log(this.props.personData)
        this.getData()
    }
    render() {
        console.log('[PD] rendered')
        console.log(this.props)
        const { updatePerson } = this.props;
        const { person } = this.state;
        const inputBackColor = {
            backgroundColor: 'burlywood',
            color: 'black'
        }
        // const passPersonData = (event) => {
        //     updatePerson(event.target.value)
        // }
        let design = null;
        if (person !== null) {
            design = (
                <table style={{ margin: '10px' }}>
                    <tr>
                        <td>Name:&nbsp;</td>
                        <td>
                            <input
                                type='text'
                                value={person.name}
                                style={inputBackColor}
                                onChange={(event) => updatePerson(person.id, 'name', event.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Age:&nbsp;</td>
                        <td>
                            <input
                                type='text'
                                value={person.age}
                                style={inputBackColor}
                                onChange={(event) => updatePerson(person.id, 'age', parseInt(event.target.value))}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Location:&nbsp;</td>
                        <td><input
                            type='text'
                            value={person.location}
                            style={inputBackColor}
                            onChange={(event) => updatePerson(person.id, 'location', event.target.value)}
                        />
                        </td>
                    </tr>
                </table>
            )
        } else {
            design = <span>loading....</span>
        }

        return design;
    }
}

export default PersonDetail
