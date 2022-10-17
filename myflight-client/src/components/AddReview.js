import React, { useState } from "react";


function AddReview({ onHandleAddReview }) {
const [formData, setFormData] = useState ({
    author: "",
    title: "",
    description: "",
    score: ""
})

function handleChange(e) {
setFormData({...formData, [e.target.name]: e.target.value})
}


    function handleSubmit(e) {
        e.preventDefault()

        e.target.reset();

        fetch("http://localhost:9292/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            author: formData.author,
            title: formData.title,
            description: formData.description,
            score: formData.score
            })

        })
            .then((resp) => resp.json())
            .then((data) => {
                onHandleAddReview(data)
                setFormData({...formData, author: "", title:"", description:"", score:""})
            })

        alert("New Review added successfully!");


    }


    return (
        <div className="new-posts-container" style={{ margin: "auto", width: '95%', height: 90 + "vh", color: "white", backgroundColor: "black", borderRadius: "15px", padding: "15px", marginTop: "5px"}}>
            <div className="links">
            </div>
                
            <div className="new-post-content">

                <form className="new-post" onSubmit={handleSubmit}>

                    <input type="text" name="author" placeholder="author" value={formData.author} onChange={handleChange}/>
                    <input type="text" name="Review title" placeholder="Review title" value={formData.title} onChange={handleChange}/>
                    <input type="text" name="Review description" placeholder="topic" value={formData.description} onChange={handleChange}/>
                    <input type="number" name="Review score" placeholder="Review score" value={formData.score} onChange={handleChange}/>
                    <button type="submit">Create Review</button>
                </form>
            </div>
        </div>

    )
}
export default AddReview;