import React, {useState, useEffect } from 'react';
import NewReview from './NewReview';
import UpdatedPost from './UpdatedPost';



 function Airlines() {

  const [posts, setPosts] = useState ([]);


  useEffect(() => {
    fetch("/reviews")
    .then((response) => response.json())
    .then((data) =>{
      setPosts(data)
      // console.log(data)
    })
  },[]);


  function handleAddPost(newData){  

    setPosts([...posts, newData]) 
}


function handleDeletePost (deletedPost){
const updatedPost = posts.filter((post) => post.id !== deletedPost.id)
setPosts(updatedPost) 
}




   return (
    <div className='post-container'>
                {posts.map((post) => (
          <UpdatedPost id={post.id} key={post.id} post={post}  onDelete={handleDeletePost} />
        ))}
            <NewReview onHandleAddPost={handleAddPost}/>
            {/* <img src={fly2} /> */}
    </div>
);
}

export default Airlines;