import React, { useState } from 'react'

const Sample = (props) => {

    const [counterState, setCounterState] = useState({ counter: 0, value: 20 });
    const [valState, setValState] = useState(0);
    const [showState, setShowState] = useState(true);
    //useState()

    const updateShow = () => {
        setShowState(ps => {
            return !ps;
        })
    }

    const updateVal = () => {
        //setValState(10);        
        updateShow();
        setValState((ps) => {
            return ps + 10;
        })
    }

    const increaseCounter = () => {
        // setCounterState({            
        //     counter: 10
        // })
        updateVal();
        setCounterState((previousState) => {
            return {
                ...previousState,
                counter: previousState.counter + props.data
            }
        })
    }
    console.log(counterState)
    return (
        <div>
            Val:&nbsp;{showState ? valState : 'not showing'}
            <br />
            Counter:&nbsp;{counterState.counter}
            <br />
            Value:&nbsp;{counterState.value}
            <br />
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}

export default Sample

/**
 * let counterState={counter:0, value:20}
 * const counterStateReducer=(state = counterState)=>{
 *   let newState=state;
 *   returm newState;
 * }
 */
