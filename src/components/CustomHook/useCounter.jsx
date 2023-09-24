import React, { useState } from 'react'

function useCounter(initalState, value) {

    const [count, setCount] = useState(initalState);

    const increment = () => {
        setCount(prevCount => prevCount + value);
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value);
    }

    const reset = () => {
        setCount(0);
    }

    return [count, increment, decrement, reset];
}

export default useCounter