import React, { Component, PureComponent } from 'react'
import { getPersonById } from '../data/peopleData'

class PersonDetail extends Component {
    //class PersonDetail extends PureComponent {
    constructor() {
        super()
        console.log('[PD] ctor called')
        // this.state = {
        //     id: 0,
        //     name: '',
        //     age: 0,
        //     location: ''
        // }

        this.state = {
            person: {
                id: 0,
                name: '',
                age: 0,
                location: ''
            }
        }
    }

    updatePersonData = (propName, newPropValue) => {
        let personCopy = { ...this.state.person }
        personCopy[propName] = newPropValue
        this.setState({
            person: personCopy
        })

        // this.setState(ps => {
        //     return {
        //         ...ps,
        //         [propName]: newPropValue
        //     }
        // })
    }

    static getDerivedStateFromProps(newProps, previousState) {
        console.log('[PD] getDerivedStateFromProps')
        return null;
    }


    shouldComponentUpdate(newProps, newState) {
        console.log('[PD] shouldComponentUpdate')

        if (this.props.personData !== newProps.personData) {
            return true;
        }

        if (this.state.person.id === 0 || this.state.person !== newState.person) {
            console.log('2')
            return true;
        }

        return false;
    }

    getData = () => {

        let foundPerson = getPersonById(this.props.personData)
        if (foundPerson !== undefined) {
            this.setState({
                person: foundPerson
            })
        }
        // else {
        //     this.setState({ person: null })
        // }
    }
    getSnapshotBeforeUpdate(oldProps, oldState) {
        console.log('[PD] getSnapshotBeforeUpdate')
        return { x: 10, y: 20 };
    }
    componentDidUpdate(oldProps, oldState, snapshot) {
        console.log('[PD] componentDidUpdate')
        console.log(snapshot)
        if (this.props.personData !== oldProps.personData && (this.state.person.id === 0 || this.state.person.id !== oldState.person.id))
            this.getData();

    }
    componentDidMount() {
        console.log('[PD] mounted')
        console.log(this.props.personData)
        this.getData()
    }
    componentWillUnmount() {
        console.log('[PD] unmounted')
    }
    render() {
        console.log('[PD] rendered')
        const { updatePerson } = this.props;
        const { person } = this.state;
        const inputBackColor = {
            backgroundColor: 'burlywood',
            color: 'black'
        }
        let design = null;
        if (person !== null) {
            design = (
                <form style={{ margin: '10px' }}>
                    <table>
                        <tr>
                            <td>Name:&nbsp;</td>
                            <td>
                                <input
                                    type='text'
                                    value={person.name}
                                    style={inputBackColor}
                                    onChange={(event) => this.updatePersonData('name', event.target.value)} /></td>
                        </tr>
                        <tr>
                            <td>Age:&nbsp;</td>
                            <td>
                                <input
                                    type='text'
                                    value={person.age}
                                    style={inputBackColor}
                                    onChange={(event) => this.updatePersonData('age', parseInt(event.target.value))}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Location:&nbsp;</td>
                            <td><input
                                type='text'
                                value={person.location}
                                style={inputBackColor}
                                onChange={(event) => this.updatePersonData('location', event.target.value)}
                            />
                            </td>
                        </tr>
                    </table>
                    <br />
                    <input
                        type='submit'
                        value='Update'
                        style={{ backgroundColor: 'burlywood' }}
                        onClick={
                            (event) => {
                                event.preventDefault();
                                updatePerson(this.state.person)
                            }
                        } />
                </form>
            )
        } else {
            design = <span>loading....</span>
        }

        return design;
    }
}

export default PersonDetail
