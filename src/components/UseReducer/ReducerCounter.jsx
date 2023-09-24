import { useReducer } from "react";

const ReducerCounter = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        switch(action) {
            case "inc": return state + 1
            case "dec": return state - 1
            case "reset": return initialState
            default: return state
        }
    }

    /**
     * @param {reducer} func - Takes a reducer function
     * @param {initialState} any - Takes any datatyoe 
     * @returns {count} - Returns the state value
     * @returns {disptach} - Performs the actions on state variable
     */
    const [count, dispatch] = useReducer(reducer, initialState)

    return(
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch("inc")}>Increment</button>
            <button onClick={() => dispatch("dec")}>Decrement</button>
            <button onClick={() => dispatch("reset")}>Reset</button>
        </>
    );
}

export default ReducerCounter;