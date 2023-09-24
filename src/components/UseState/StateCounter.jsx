import { useState } from "react";

const HookCounter = () => {

    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <button onClick={clickHandler}>Counter value: {count}</button>
        </>
    );
}

export default HookCounter;

