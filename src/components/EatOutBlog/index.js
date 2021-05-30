import React from 'react'

const EatOutBlog = ({ postData, handleSelect }) => {
    console.log(postData)
    return (
        <>
            <section className="blog-container">
                <div className="left">
                    <img style={{ width: "300px", height: "auto" }} src={postData.image} onClick={() => handleSelect(postData.id)} />
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
                    <p>{postData.restaurant_name}, {postData.location}</p>
                    <p>{postData.description}</p>
                </div>
            </section>
        </>
    )
}

export default EatOutBlog
