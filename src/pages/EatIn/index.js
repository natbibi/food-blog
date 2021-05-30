import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EatInPost } from '../../components'

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
        <EatInPost postData={d} key={d.id} />
    );

 
    return (
        <>
            <header>
                <h1>My Personal Cooking</h1>
                <h5>Cats are cute groom forever, stretch tongue and leave it slightly out, blep but reward the chosen human with a slow blink, and use lap as chair there's a forty year old lady there let us feast intently stare at the same spot. Chase laser small kitty warm kitty little balls of fur, poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls</h5>
            </header>
            <main id="eatin">
                {loading ? <p className="main-container">loading... please wait or refresh </p> :
                    <>{renderPosts} </>}
                {error && <p className="main-container">sorry, please try again!</p>}
            </main>
        </>
    )
}

export default EatIn;