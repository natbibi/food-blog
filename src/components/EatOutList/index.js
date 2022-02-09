import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const EatOutList = ({ postData, handleSelect }) => {
    return (
        <div className="post-container">
            <img src={postData.image} onClick={() => handleSelect(postData.id)} />
            <div className="centered hide"><h5 style={{ fontSize: "18px", textAlign: "center" }}><em>"{postData.title}"</em></h5></div>
            <p style={{ fontSize: "14px" }}>{Math.round((0.3*postData.value + 0.4*postData.taste + 0.15*postData.atmosphere + 0.15*postData.service) * 10) / 10} ⭐️ | {postData.restaurant_name}</p>
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
