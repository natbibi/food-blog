import React from 'react'
import { useParams } from 'react-router-dom'
import { FcPodiumWithSpeaker } from "react-icons/fc";

const EatInItem = ({ postData, handleSelect }) => {
    const { id } = useParams()

    return (
        <>
            <section className="item-container display-linebreak">
                <div className="left">
                    <img style={{ width: "300px", height: "auto" }} src={postData.image} onClick={() => handleSelect(postData.id)} />
                </div>

                <div className="right">
                    <span style={{ fontSize: "12px", textAlign: "end" }}>{postData.date}</span>
                    <h3 style={{ marginBlock: "1.5rem" }}><em>"{postData.title}"</em></h3>
                    <p style={{ display: "flex", alignItems: "center" }}><FcPodiumWithSpeaker /> {postData.dish_name}</p>
                    <p style={{ textAlign: "justify" }}>{postData.description}</p>
                </div>
            </section>
        </>
    )
}

export default EatInItem
