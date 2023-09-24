import { useContext } from "react";
import UserContext from "../../UserContext.js";

const ComponentA = () => {
    return (
        <ComponentB />
    );
}

const ComponentB = () => {

    return(
        <ComponentC />
    );
}

const ComponentC = () => {

    // Consume the Context API provided
    const user = useContext(UserContext)
    
    return(
        <p>Name: {user.name} Role: {user.role}</p>
    );
}

export default ComponentA;