import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class Counter extends Component {
    state = {
        counter: 0
    }
    increaseCounterHandler = () => {
        this.setState(ps => {
            return {
                counter: ps.counter + 1
            }
        })
    }
    render() {
        return (
            <div>
                <ClickCounter counterValue={this.state.counter} counterHandler={this.increaseCounterHandler} />

                <HoverCounter counterData={this.state.counter} counterFunction={this.increaseCounterHandler} />
            </div>
        )
    }
}
