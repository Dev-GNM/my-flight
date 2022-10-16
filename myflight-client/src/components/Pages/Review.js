import React, { useState, useEffect } from 'react'

function Review() {
    const [reviews, setReviews] = useState ([]);

    useEffect(() => {
        fetch("/reviews")
        .then((response) => response.json())
        .then((data) =>{
          setReviews(data)
          // console.log(data)
        })
      },[]);
    
      function handleAddReview(newData){  
    
        setReviews([...reviews, newData]) 
    }
    
    
    function handleDeleteReview (deletedReview){
    const updatedReview = reviews.filter((review) => review.id !== deletedReview.id)
    setReviews(updatedReview) 
    }
    


  return (
    <div className='review-container'>
      
    </div>
  )
}


export default Review;
