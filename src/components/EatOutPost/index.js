import React from 'react'

const EatOutPost = ({ postData }) => {
    console.log(postData)
    return (
        <div className="post-container">
            <h5>"{postData.title}"</h5>
            <p>{postData.restaurant_name}, {postData.location}</p>
            <img style={{width: "300px", height: "auto"}}src={postData.image}/>        
            <p>{postData.value}⭐️</p>    
        </div>
    )
}

export default EatOutPost

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
