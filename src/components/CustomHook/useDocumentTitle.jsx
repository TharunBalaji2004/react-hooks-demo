import React, {useEffect} from 'react'

// Custom Hooks should start with "use"
function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default useDocumentTitle;

