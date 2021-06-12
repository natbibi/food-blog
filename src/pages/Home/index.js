import React from 'react';
import stemoji from '../../Images/stemoji.png'

const Home = () => {
 
    return (
        <>
            <header id="homepage">
                <h1>Hello World!</h1>
                <img src={stemoji}/>
            </header>
        </>
    )
}

export default Home;