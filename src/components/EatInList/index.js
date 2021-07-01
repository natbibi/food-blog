import React from 'react'
import { FcPodiumWithSpeaker } from "react-icons/fc";

const EatInList = ({ postData, handleSelect }) => {

    return (
        <div className="post-container">
            <img src={postData.image} onClick={() => handleSelect(postData.id)} />
            <div className="centered hide"><h5 style={{ fontSize: "18px", textAlign: "center" }}><em>"{postData.title}"</em></h5></div>
            <p style={{ fontSize: "14px" }}>{postData.restaurant_name}</p>
            <p style={{ display: "flex", alignItems: "center", fontSize: "12px", paddingBottom: "0.5rem" }}><FcPodiumWithSpeaker /> {postData.dish_name}</p>
        </div>
    )




}

export default EatInList