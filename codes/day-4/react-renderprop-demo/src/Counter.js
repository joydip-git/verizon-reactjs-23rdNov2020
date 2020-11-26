import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import { utility } from './utility'

export default class Counter extends Component {
    static propTypes = {
        render: PropTypes.func.isRequired
    }
    state = {
        counter: 0
    }
    increaseCounter = (value) => {
        this.setState(ps => {
            return {
                counter: ps.counter + value
            }
        })
    }
    render() {
        return (
            <div>

                {this.props.render(this.state.counter, this.increaseCounter)}
            </div>
        )
    }
}
//Object.assign(Counter.prototype, utility);
//console.log(Counter.prototype)
