import React from 'react'
import { useParams } from 'react-router-dom'
import { FcPodiumWithSpeaker } from "react-icons/fc";

const EatInItem = ({ postData, handleSelect }) => {
    const { id } = useParams()

    return (
        <>
            <section className="item-container">
            <div className="left">
                    <img style={{ width: "300px", height: "auto" }} src={postData.image} onClick={() => handleSelect(postData.id)} />
                </div>

                <div className="right">
                    <h3><em>"{postData.title}"</em></h3>
                    <h6>{postData.date}</h6>
                    <p style={{ display: "flex", alignItems: "center" }}><FcPodiumWithSpeaker /> {postData.dish_name}</p>
                    <p style={{ textAlign: "justify" }}>{postData.description}</p>
                </div>
            </section>
        </>
    )
}

export default EatInItem
