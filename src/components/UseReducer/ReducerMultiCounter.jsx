import { useReducer } from "react";

const ReducerMultiCounter = () => {

    const init = 0;
    const reducer = (state, action) => {
        // action -> {type: , value: }
        switch(action.type){
            case "inc": return state + action.value
            case "dec": return state - action.value
            case "reset": return init
            default: return state
        }
    }

    const [count, dispatch] = useReducer(reducer, init)

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatch({type: "inc", value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: "inc", value: 5})}>Increment by 5</button>
            <button onClick={() => dispatch({type: "dec", value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: "dec", value: 5})}>Decrement by 5</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    );
}

export default ReducerMultiCounter;