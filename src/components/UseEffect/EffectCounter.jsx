import { useEffect, useState } from "react";

const EffectCounter = () => {
    
    const [count, setCount] = useState(0);

    const clickHandler = () => {
        setCount(prevCount => prevCount + 1);
    }

    // useEffect executes on every render
    useEffect(() => {
        const interval = setInterval(clickHandler, 1000);
        document.title=`You clicked ${count} times`

        return() => {
            clearInterval(interval)
        }
    })
    // useEffect executes only on initial render
    useEffect(() => {document.title=`You clicked ${count} times`}, [])
    // useEffect executes whenever the [count] value changes
    useEffect(() => {
        document.title=`You clicked ${count} times`

        return() => {
            console.log("Cleanup function");
        }
    }, [count])

    return (
        <>
            <button onClick={clickHandler}>Clicked {count} times</button>
        </>
    );
}

export default EffectCounter;