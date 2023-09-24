import { useEffect, useReducer, useState } from "react";
import axios from "axios";

const reducer = (state, action) => {
    switch(action.type) {
        case "SUCCESS": return {
            loading: false,
            post: action.payload,
            error: ""
        }
        case "ERROR": return {
            loading: false,
            post: {},
            error: "Something went wrong"
        }
        default: return state
    }
}

const ReducerFetchData = () => {

    const initialState = {
        loading: true,
        error: "",
        post: {}
    }
    const BASE_URL = "https://jsonplaceholder.typicode.com/posts/1"

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get(BASE_URL)
            .then(response => {
                dispatch({type: "SUCCESS", payload: response.data})
            })
            .catch(error => {
                dispatch({type: "ERROR"})
            })
    }, [])

    return (
        <>
            {state.loading ? "Loading" : state.post.title}
            {state.error ? error : null}
        </>
    );
}

export default ReducerFetchData;