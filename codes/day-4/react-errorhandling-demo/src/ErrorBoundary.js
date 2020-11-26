import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {

    static propTypes = {
        errorHandler: PropTypes.func.isRequired
    }

    state = {
        error: null
    }
    static getDerivedStateFromError(error) {
        return {
            error: error
        }
    }
    render() {
        console.log('[EB] rendered...')
        if (this.state.error !== null)
            return <span>Error Occurred</span>
        else
            return this.props.children;
    }
    componentDidCatch(error, info) {
        this.props.errorHandler({ error, info })
    }
}
// ErrorBoundary.propTypes = {
//     errorHandler: PropTypes.func.isRequired
// }
