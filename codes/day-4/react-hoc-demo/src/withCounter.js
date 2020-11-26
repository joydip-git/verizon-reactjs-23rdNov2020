import { Component } from "react";

const withCounter = (OriginalComponent) => {

    class WithCounter extends Component {
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
        logError = (error) => {
            console.log(error)
        }
        render() {
            return <OriginalComponent counterValue={this.state.counter} counterHandler={this.increaseCounterHandler} logger={this.logError} />
        }
    }

    return WithCounter;
}
export default withCounter;