import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import { EatOutPost, EatOutBlog } from '../../components'

const EatOut = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get("https://nat-api.herokuapp.com/eatout/?ordering=-id")
                setPost(data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err)
            }
        }
        fetchPosts()
    }, []);

    const handleSelect = (id) => {
        history.push(`eatout/${(id)}`)
    }

    const renderPosts = post.map(d =>
        <EatOutPost postData={d} key={d.id} handleSelect={handleSelect} />
    );

    return (
        <>
            <section style={{paddingBottom: "5rem"}}>

                {
                    <Switch>
                        <Route exact path={"/eatout"} render={() => (
                            <>
                                <header>
                                    <h1>My Eating Adventures!</h1>
                                    <h5>⏰⏰⏰ WOOOO, lockdown is over, time to visit some restaurants that we been wanting to visit for sometimes.</h5>
                                    <h5>Food! FOod! FOOD! 🦀🍣🥩</h5>
                                </header>
                                <main id="eatout">
                                    {loading ? <p style={{ textAlign: "center" }}>loading... please wait or refresh </p> :
                                        <>{renderPosts} </>}
                                    {error && <p style={{ textAlign: "center" }}>sorry, please try again!</p>}
                                </main>
                            </>)} />

                        <Route path={"/eatout/:id"} render={({ match }) => (
                            <>
                                <header>
                                    <h1>My Eating Adventures!</h1>
                                </header>
                                {loading ? <p style={{ textAlign: "center", marginTop: "3rem" }}>loading... please wait or refresh </p> :
                                    <div className="container">
                                        <EatOutBlog postData={post[match.params.id - 1]} handleSelect={() => { }} />
                                    </div>
                                }
                            </>
                        )} />



                    </Switch>
                }
            </section>
        </>
    )
}

export default EatOut;