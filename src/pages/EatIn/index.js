import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { EatInList, EatInItem } from '../../components'

const EatIn = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const fetchPosts = async () => {
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

    const handleSelect = (id) => {
        console.log(id)
        history.push(`eatin/${(id)}`)
    }

    const renderPosts = post.map(d =>
        <EatInList postData={d} key={d.id} handleSelect={handleSelect} />
    );

    return (
        <>
            <section style={{ paddingBottom: "5rem" }}>
                {
                    <Switch>
                        <Route exact path={"/eatin"} render={() => (
                            <>
                                <header>
                                    <h1>My Personal Cooking</h1>
                                    <h5>👨‍🍳👨‍🍳👨‍🍳 I like cooking, and doing the groceries, would actually love to be a house husband 😂 </h5>
                                    <h5>Not the best cook, but pretty sure I’ll get better overtime!</h5>
                                </header>
                                <main id="eatin">
                                    {loading ? <p style={{ textAlign: "center" }}>loading... please wait or refresh </p> :
                                        <>{renderPosts} </>}
                                    {error && <p style={{ textAlign: "center" }}>sorry, please try again!</p>}
                                </main>
                            </>)} />

                        <Route path={"/eatin/:id"} render={({ match }) => (
                            <>
                                {loading ? <p style={{ textAlign: "center", marginTop: "3rem" }}>loading... please wait or refresh </p> :
                                    <div className="container">
                                        <EatInItem postData={post.find(p => p.id == [match.params.id])} handleSelect={() => { }} />
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

export default EatIn;