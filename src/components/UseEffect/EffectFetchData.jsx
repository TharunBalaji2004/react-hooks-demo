import { useState, useEffect } from "react";
import axios from "axios";

const EffectFetchData = () => {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

    // Fetches only once
    useEffect(() => {
        axios.get(`${BASE_URL}/${id}`)
            .then(res => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    return (
        <>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            
            <div>
                {post.title}
            </div>

            {/* {
                posts.map(post => <ul key={post.id}>{post.title}</ul>)
            } */}
        </>
    );
}

export default EffectFetchData;