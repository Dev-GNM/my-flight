import React, { useState } from "react";


function NewReview({ onHandleAddPost }) {
const [formData, setFormData] = useState ({
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

        fetch("/reviews", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            title: formData.title,
            description: formData.description,
            score: formData.score,
            })

        })
            .then((resp) => resp.json())
            .then((data) => {
                onHandleAddPost(data)
                setFormData({...formData, title: "", description:"", score:""})
            })

        alert("New Review added successfully!");


    }


    return (
        <div className="new-posts-container" style={{ margin: "auto", width: '60%', height: 90 + "vh", color: "white", backgroundColor: "black", borderRadius: "15px", padding: "15px", marginTop: "5px"}}>
            <div className="links">
            </div>
            <div className="new-post-content">

                {/* <form className="new-post" onSubmit={handleSubmit}>

                    <input type="text" name="title" placeholder="title" value={formData.title} onChange={handleChange}/>
                    <input type="text" name="description" placeholder="description" value={formData.description} onChange={handleChange}/>
                    <input type="text" name="score" placeholder="score" value={formData.score} onChange={handleChange}/>
                    <button type="submit">Submit Review</button>

                </form> */}
            </div>
        </div>

    )
}
export default NewReview;