import { Component } from "react";
import PropTypes from 'prop-types'

const withMemo = (WrappedComponent) => {

    class WithMemo extends Component {
        static propTypes = {
            value: PropTypes.number,
            person: PropTypes.object
        }
        state = {
            p: { name: null }
        }
        static getDerivedStateFromProps(newProps, previousState) {

            return {
                p: newProps.person
            }
        }
        shouldComponentUpdate(newProps, newState) {
            for (let propName in newProps) {
                if (this.props[propName] !== newProps[propName]) {
                    return true;
                }
            }
            return false;
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    return WithMemo;
}
export default withMemo;
