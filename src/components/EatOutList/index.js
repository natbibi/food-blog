import React from 'react'

const EatOutList = ({ postData, handleSelect }) => {
    return (
        <div className="post-container">
            <h5 style={{ fontSize: "18px", width: "70%" }}><em>"{postData.title}"</em></h5>
            <img src={postData.image} onClick={() => handleSelect(postData.id)} />
            <p>{postData.restaurant_name}</p>
            <p>{postData.location}</p>
            <div className="ratings">
                <p>{postData.value + postData.taste + postData.atmosphere + postData.service} ⭐️</p>
            </div>
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
