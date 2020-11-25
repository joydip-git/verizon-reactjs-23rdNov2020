import React, { Component } from 'react'
import PersonCard from './PersonCard';
import PersonDetail from './PersonDetail';

export default class PersonList extends Component {
    constructor() {
        super()
        console.log('[PL] ctor called')
        console.log(this.props)
    }
    state = {
        people: [],
        selectedPerson: null
    }

    static getDerivedStateFromProps(newProps, previousState) {
        console.log('[PL] getDerivedStateFromProps')
        console.log(newProps)
        console.log(previousState)
        // return {
        //     value: previousState.value + newProps.data
        // }
        return null;
    }

    componentDidMount() {
        //getting data from some database/file/restful api app
        this.setState({
            value: 20
        })
    }

    selectPersonHandler = (personId) => {
        let found = this.state.people.find((p) => p.id === personId);
        this.setState({
            selectedPerson: found
        })
    }

    updatePersonHandler = (personId, propName, newPropValue) => {
        let found = this.state.people.find(p => p.id === personId);
        let foundIndex = this.state.people.findIndex(p => p.id === personId)

        let copyOfFound = { ...found };
        copyOfFound[propName] = newPropValue;

        let copyOfPeople = [...this.state.people]
        copyOfPeople[foundIndex] = copyOfFound

        this.setState({
            people: copyOfPeople,
            selectedPerson: copyOfFound
        })
    }
    render() {
        //getting data from some database/file/restful api app
        //this.setState({ value: 20 })
        console.log('[PL] rendered')
        console.log(this.props)
        console.log(this.state)
        return (
            <div style={{ width: '600px' }}>
                {
                    /* 
                    <button onClick={() => this.setState({ value: 20 })}>Update Value</button> */
                }
                <div style={{ float: "left" }}>
                    {
                        this.state.people.map(
                            (p, index) => {
                                return <PersonCard person={p} key={p.id} selectPerson={this.selectPersonHandler} />
                            }
                        )
                    }
                </div>
                <div style={{ float: "right", border: '1px solid red', borderRadius: '5px', margin: '50px', backgroundColor: 'beige' }}>
                    {
                        (this.state.selectedPerson !== null) &&
                        (
                            <PersonDetail personData={this.state.selectedPerson} updatePerson={this.updatePersonHandler} />
                        )
                    }
                </div>
            </div>
        );
    }
}
