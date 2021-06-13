import React from 'react';
import stemoji from './../../../public/images/stemoji.jpg'

const Home = () => {

    return (
        <>
            <header style={{ padding: "1rem" }}>
                <h1>Hello World!</h1>
            </header>
            <main id="homepage">
                <img src={stemoji} />
            </main>
        </>
    )
}

export default Home;