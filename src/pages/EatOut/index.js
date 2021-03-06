import React, { useEffect, useState } from 'react';
import { Route, Switch, useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { EatOutList, EatOutItem } from '../../components'

const EatOut = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const history = useHistory();
    const { id } = useParams();
    const [sortData, setSortData] = useState("ordering=-id")

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(`https://nat-api.herokuapp.com/eatout/?format=json&${sortData}`)
                setPost(data)
                setLoading(false)
            } catch (err) {
                setLoading(false)
                setError(err)
            }
        }
        fetchPosts()
    }, [sortData]);

    const handleClick = (e) => {
        setSortData(e.target.value)
    }

    const handleSelect = (id) => {
        console.log(id)
        history.push(`eatout/${(id)}`)
    }

    const renderPosts = post.map(d =>
        <EatOutList postData={d} key={d.id} handleSelect={handleSelect} />
    );

    return (
        <>
            <section style={{ paddingBottom: "5rem" }}>

                {
                    <Switch>
                        <Route exact path={"/eatout"} render={() => (
                            <>
                                <header>
                                    <h1>My Eating Adventures!</h1>
                                    <h5>⏰⏰⏰ WOOOO, lockdown is over, time to visit some restaurants that we been wanting to visit for sometimes.</h5>
                                    <h5>Food! FOod! FOOD! 🦀🍣🥩</h5>
                                    <div className="dropdown-content">
                                        <label>Sort by:
                                            <select id="dropdown" onChange={handleClick} >
                                                <option value="ordering=-id">Newest</option>
                                                <option value="ordering=date">Oldest</option>
                                                <option value="recommend=true">Recommend</option>
                                                <option value="recommend=false">Avoid</option>
                                            </select>
                                        </label>
                                    </div>
                                </header>
                                <main id="eatout">
                                    {loading ? <p style={{ textAlign: "center" }}>loading... please wait or refresh </p> :
                                        <>{renderPosts} </>}
                                    {error && <p style={{ textAlign: "center" }}>sorry, please try again!</p>}
                                </main>
                            </>)} />

                        <Route path={"/eatout/:id"} render={({ match }) => (
                            <>
                                {loading ? <p style={{ textAlign: "center", marginTop: "3rem" }}>loading... please wait or refresh </p> :
                                    <div className="container">
                                        <EatOutItem postData={post.find(p => p.id == [match.params.id])} handleSelect={() => { }} />
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