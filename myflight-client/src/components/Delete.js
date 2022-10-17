import React from "react";


function Delete({ onDelete, review }) {

    function handleDeleteClick() {
        fetch(`http://localhost:9292${review.id}`, {
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
            <div><span>{review.author}</span></div>
            <div><span>{review.title}</span></div>
            <div><span>{review.description}</span></div>
            <div><span>{review.score}</span>
            </div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}


export default Delete;