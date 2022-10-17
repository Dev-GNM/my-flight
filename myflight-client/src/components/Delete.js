import React from "react";


function Delete({ onDelete, review }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292${post.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => 
                onDelete(review)
            
            )
    }


    return (

        <div>
            {/* <p> <span  type = "button" role="img" aria-label="delete">
        </span> </p> */}
            <div><span>{review.date}</span></div>
            <div><span>{review.author}</span></div>
            <div><span>{review.topic}</span></div>
            <div><span>{review.content}</span>
            </div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}


export default Delete;