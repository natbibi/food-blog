import React from 'react'

const EatInPost = ({ postData }) => {
    console.log(postData)
    return (
        <div className="post-container">
            {/* <h5>"{postData.title}"</h5>
            <img style={{ width: "300px", height: "auto" }} src={postData.image} />
            <p>{postData.restaurant_name}, {postData.location}</p>
            <div className="ratings">
                <p>Value: {postData.value}⭐️ |</p>
                <p>Taste: {postData.taste}⭐️ |</p>
                <p>Atmosphere: {postData.atmosphere}⭐️ |</p>
                <p>Service: {postData.service}⭐️</p>
            </div> */}
        </div>
    )
}

export default EatInPost