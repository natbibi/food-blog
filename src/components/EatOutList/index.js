import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const EatOutList = ({ postData, handleSelect }) => {
    return (
        <div className="post-container">

            <img src={postData.image} onClick={() => handleSelect(postData.id)} />
            <h5 style={{ fontSize: "16px", textAlign: "center" }}><em>"{postData.title}"</em></h5>
            <p style={{ fontSize: "14px" }}>{postData.value + postData.taste + postData.atmosphere + postData.service} ⭐️ | {postData.restaurant_name}</p>
            <p style={{ display: "flex", alignItems: "center", fontSize: "12px", paddingBottom: "0.5rem" }}><IoLocationOutline />  {postData.location}</p>
        </div>
    )
}

export default EatOutList

// "title": "wAWuueAt",
// "restaurant_name": "Waaaweewaaa",
// "location": "waaawuuland",
// "value": 5,
// "taste": 5,
// "atmosphere": 5,
// "service": 5,
// "description": "wawuuu",
// "image": "https://ste-food-blog.s3.amazonaws.com/media/media/IMG_1900_l62Dldp.JPG",
// "recommend": true
