import { useState } from "react";

const HookObject = () => {
    
    const [name, setName] = useState({firstName: "", lastName: ""})

    return(
        <>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({...name,firstName: e.target.value})} />
                <input type="text" value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}/>
            </form>
            <h2>Your First Name: {name.firstName}</h2>
            <h2>Your Last Name: {name.lastName}</h2>

            <h2>{JSON.stringify(name)}</h2>
        </>
    );
}

export default HookObject;