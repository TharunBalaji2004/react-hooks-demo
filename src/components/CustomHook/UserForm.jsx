import React, { useState } from 'react'
import useInput from './useInput';

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput("");
    const [lastName, bindLastName, resetLastName] = useInput("");

    const submitHandler = (event) => {
        event.preventDefault();

        alert(`Hello there! ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input {...bindFirstName} type='text' />
                </div>
                <div>
                    <label>Last Name</label>
                    <input {...bindLastName} type='text' />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default UserForm