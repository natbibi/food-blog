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
                const { data } = await axios.get("https://nat-api.herokuapp.com/eatout/")
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
            <section>
                <header>
                    <h1>My Eating Adventures!</h1>
                </header>
                {
                    <Switch>
                        <Route exact path={"/eatout"} render={() => (
                            <>

                                <main id="eatout">
                                    {loading ? <p className="main-container">loading... please wait or refresh </p> :
                                        <>{renderPosts} </>}
                                    {error && <p className="main-container">sorry, please try again!</p>}
                                </main>
                            </>)} />

                        <Route path={"/eatout/:id"} render={({ match }) => (
                            <>
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