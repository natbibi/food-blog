import React from 'react'
import { useParams } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";

const EatOutItem = ({ postData, handleSelect }) => {
    const { id } = useParams();

    return (
        <>
            <section className="item-container display-linebreak">
                <div className="left">
                    <div className="post-container">
                        <img style={{ width: "300px", height: "auto" }} src={postData.image} onClick={() => handleSelect(postData.id)} />
                        <p style={{ fontSize: "14px" }}>{postData.value + postData.taste + postData.atmosphere + postData.service} ⭐️ | {postData.restaurant_name}</p>
                        <p style={{ display: "flex", alignItems: "center", fontSize: "12px", paddingBottom: "0.5rem" }}><IoLocationOutline />  {postData.location}</p>
                    </div>
                </div>

                <div className="right">
                    <span style={{ fontSize: "12px", textAlign: "end" }}>{postData.date}</span>
                    <h3 style={{ marginBlock: "1.5rem" }}><em>"{postData.title}" </em></h3>

                    <div className="ratings">
                        <p>Value: {postData.value} ⭐️ </p>
                        <p>Taste: {postData.taste} ⭐️ </p>
                        <p>Atmosphere: {postData.atmosphere} ⭐️ </p>
                        <p>Service: {postData.service} ⭐️</p>
                    </div>
                    {/* <p style={{ display: "flex", alignItems: "center" }}><IoLocationOutline /> {postData.restaurant_name}, {postData.location}</p> */}
                    <p style={{ textAlign: "justify" }}>{postData.description}</p>
                    {postData.recommend ? <p>Would I recommend: ✅ </p> : <p>Would I recommend: ❌</p>}

                    <div className="more-images">
                        <img src={postData.more_images[0]} />
                        <img src={postData.more_images[1]} />
                        <img src={postData.more_images[2]} />
                        <img src={postData.more_images[3]} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default EatOutItem
