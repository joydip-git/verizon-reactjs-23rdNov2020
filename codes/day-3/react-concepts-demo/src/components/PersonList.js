import React, { Component } from 'react'
import PersonCard from './PersonCard';

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
        ]
    }
    render() {

        return (
            <div>
                {
                    this.state.people.map(
                        (p) => {
                            return <PersonCard person={p} />
                        }
                    )
                }
            </div>
        );
    }
}