import { Component } from "react";

const withCounter = (OriginalComponent, initialState) => {

    class WithCounter extends Component {
        state = {
            counter: initialState
        }
        increaseCounterHandler = () => {
            this.setState(ps => {
                return {
                    counter: ps.counter + 1
                }
            })
        }
        logError = (error) => {
            console.log(error)
        }
        render() {
            return (
                <OriginalComponent
                    counterValue={this.state.counter}
                    counterHandler={this.increaseCounterHandler}
                    logger={this.logError}
                    {...this.props}
                />
            )
        }
    }

    return WithCounter;
}
export default withCounter;