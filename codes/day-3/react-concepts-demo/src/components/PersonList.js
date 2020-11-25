import React, { Component } from 'react'
import { getPeople } from '../data/peopleData';
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
        console.log('[PL] mounted...')
        const peopleArray = getPeople()
        if (peopleArray !== null && peopleArray.length > 0) {
            this.setState({
                people: peopleArray
            })
        }
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
                    (this.state.people.length > 0) ?
                        (
                            <div style={{ float: "left" }}>
                                {
                                    this.state.people.map(
                                        (p, index) => {
                                            return <PersonCard person={p} key={p.id} selectPerson={this.selectPersonHandler} />
                                        }
                                    )
                                }
                            </div>
                        ) :
                        (<span>loading....</span>)
                }
                <br />
                {
                    (this.state.selectedPerson !== null) ?
                        (
                            <div style={{ float: "right", border: '1px solid red', borderRadius: '5px', margin: '50px', backgroundColor: 'beige' }}>
                                <PersonDetail personData={this.state.selectedPerson} updatePerson={this.updatePersonHandler} />

                            </div>
                        ) :
                        (<span>please select a person...</span>)
                }
            </div>
        );
    }
}
