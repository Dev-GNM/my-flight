import React from "react";


function UpdatedPost({ onDelete, post }) {

    function handleDeleteClick() {
        fetch(`/airlines${post.id}`, {
            method: "DELETE",
        })
            .then((response) => response.json())
            .then(() => 
                onDelete(post)
            
            )
    }


    return (

        <div>
            <div><span>{post.name}</span></div>
            <div><span>{post.image_url}</span></div>
            <div>
                <button onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}


export default UpdatedPost;