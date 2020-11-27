import { useState } from "react";

const useCounter = (initialState = 0) => {

    const [counterState, setCounterState] = useState(initialState);

    const increaseCounterHandler = () => {
        setCounterState(ps => { return ps + 1 });
    }

    return [counterState, increaseCounterHandler]
}
export default useCounter;