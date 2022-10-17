import React from "react";


function Delete({ onDelete, myreview }) {

    function handleDeleteClick() {
        fetch(`myreviews${myreview.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => 
                onDelete(myreview)
            
            )
    }


    return (

        <div>
            {/* <p> <span  type = "button" role="img" aria-label="delete">
        </span> </p> */}
            <div><span>{myreview.author}</span></div>
            <div><span>{myreview.title}</span></div>
            <div><span>{myreview.description}</span></div>
            <div><span>{myreview.score}</span>
            </div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}


export default Delete;