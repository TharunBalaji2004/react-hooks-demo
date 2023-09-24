import { useState } from "react"

function useInput(initialValue) {
    const [field, setField] = useState(initialValue);

    const reset = () => {
        setField(initialValue)
    }

    const bind = {
        value: field,
        onChange: event => { setField(event.target.value) }
    }

    return [field, bind, reset];
}

export default useInput