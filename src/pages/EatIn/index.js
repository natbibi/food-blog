import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EatInList } from '../../components'

const EatIn = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const { data } = await axios.get("https://nat-api.herokuapp.com/eatin/")
                setPost(data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err)
            }
        }
        fetchPosts()
    }, []);

    const renderPosts = post.map(d =>
        <EatInList postData={d} key={d.id} />
    );

 
    return (
        <>
            <header>
                <h1>My Personal Cooking</h1>
                <h5>👨‍🍳👨‍🍳👨‍🍳 I like cooking, and doing the groceries, would actually love to be a house husband 😂 </h5>
                <h5>Not the best cook, but pretty sure I’ll get better overtime!</h5>
            </header>
            <main id="eatin">
                {loading ? <p style={{textAlign: "center"}}>loading... please wait or refresh </p> :
                    <>{renderPosts} </>}
                {error && <p style={{textAlign: "center"}}>sorry, please try again!</p>}
            </main>
        </>
    )
}

export default EatIn;