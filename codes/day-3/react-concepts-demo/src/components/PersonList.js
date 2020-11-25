import React, { Component } from 'react'
import PersonCard from './PersonCard';
import PersonDetail from './PersonDetail';

export default class PersonList extends Component {

    state = {
        people: [
            {
                id: 1,
                name: 'sunil',
                age: 20,
                location: 'bangalore'
            },
            {
                id: 2,
                name: 'anil',
                age: 30,
                location: 'chennai'
            },
            {
                id: 3,
                name: 'joydip',
                age: 40,
                location: 'mumbai'
            }
        ],
        selectedPerson: null
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

        return (
            <div style={{ width: '600px' }}>
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
                        (this.state.selectedPerson !== null) ?
                            (
                                <PersonDetail personData={this.state.selectedPerson} updatePerson={this.updatePersonHandler} />
                            ) :
                            (
                                <span>No person selected</span>
                            )
                    }
                </div>
            </div>
        );
    }
}
