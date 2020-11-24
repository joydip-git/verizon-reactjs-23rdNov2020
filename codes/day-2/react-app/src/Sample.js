import React, { Component } from 'react'
export default class Sample extends Component {
    constructor() {
        super()
    }

    sayHello = () => {
        window.alert('hello from class component')
    }
    render() {
        return (
            <span onClick={this.sayHello}>
                This is class component
            </span>
        )
    }
}