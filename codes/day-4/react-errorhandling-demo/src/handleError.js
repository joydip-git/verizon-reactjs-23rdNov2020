import { Component } from "react"
import PropTypes from 'prop-types'

const handleError = (WrappedComponent, errorHandler) => {

    class HandleError extends Component {

        // static propTypes = {
        //     errorHandler: PropTypes.func.isRequired
        // }

        state = {
            error: null
        }
        static getDerivedStateFromError(error) {
            return {
                error: error
            }
        }
        render() {

            if (this.state.error !== null)
                return <span>Error Occurred</span>
            else
                return <WrappedComponent {...this.props} />
        }
        componentDidCatch(error, info) {
            //this.props.errorHandler({ error, info })
            errorHandler({ error, info })
        }
    }
    return HandleError;
}
export default handleError;