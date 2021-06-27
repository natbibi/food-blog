import React from 'react'
import { useParams } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";

const EatOutItem = ({ postData, handleSelect }) => {
    const { id } = useParams();

    return (
        <>
            <section className="item-container">
                <div className="left">
                    <img style={{ width: "300px", height: "auto" }} src={postData.image} onClick={() => handleSelect(postData.id)} />

                    <div className="more-images">
                        <img style={{ width: "100px", height: "auto" }} src={postData.more_images[0]} />
                        <img style={{ width: "100px", height: "auto" }} src={postData.more_images[0]} />
                        <img style={{ width: "100px", height: "auto" }} src={postData.more_images[0]} />
                    </div>
                    
                </div>

                <div className="right">
                    <h3><em>"{postData.title}"</em></h3>
                    <h6>{postData.date}</h6>
                    <div className="ratings">
                        <p>Value: {postData.value}⭐️ |</p>
                        <p>Taste: {postData.taste}⭐️ |</p>
                        <p>Atmosphere: {postData.atmosphere}⭐️ |</p>
                        <p>Service: {postData.service}⭐️</p>
                    </div>
                    <p style={{ display: "flex", alignItems: "center" }}><IoLocationOutline /> {postData.restaurant_name}, {postData.location}</p>
                    <p style={{ textAlign: "justify" }}>{postData.description}</p>
                    {postData.recommend ? <p>Would I recommend: ✅ </p> : <p>Would I recommend: ❌</p>}
                </div>
            </section>
        </>
    )
}

export default EatOutItem
