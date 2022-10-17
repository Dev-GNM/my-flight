import React, { useState, useEffect } from 'react'
import AddReview from '../AddReview';
import Delete from '../Delete';

function NewReview() {

    const [reviews, setReviews] = useState ([]);
    useEffect(() => {
        fetch("")
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
    <div className='create-review'>
        <div>
</div>
 <div className='reviews-container'>
    <h3>Reviews</h3>
 </div>
 {reviews.map((review) => (
          <Delete id={review.id} key={review.id} review={review}  onDelete={handleDeleteReview} />
        ))}
         <AddReview onHandleAddReview={handleAddReview}/>
      
    </div>
  )
}



export default NewReview