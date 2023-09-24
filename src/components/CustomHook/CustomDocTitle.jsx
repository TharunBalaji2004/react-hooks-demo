import React, { useEffect, useState } from 'react'
import useDocumentTitle from './useDocumentTitle';

function CustomDocTitle() {

    const [count, setCount] = useState(0);

    // Custom Hook - value is passed
    useDocumentTitle(count);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </>
    );
}


export default CustomDocTitle;