import React, { useState, useEffect } from 'react'
import AddReview from '../AddReview';
import Delete from '../Delete';

function NewReview() {

    const [myreviews, setReviews] = useState ([]);
    useEffect(() => {
        fetch("/myreviews")
        .then((response) => response.json())
        .then((data) =>{
          setReviews(data)
          // console.log(data)
        })
      },[]);

      function handleAddReview(newData){  

        setReviews([...myreviews, newData]) 
    }

    function handleDeleteReview (deletedReview){
        const updatedReview = myreviews.filter((myreview) => myreview.id !== deletedReview.id)
        setReviews(updatedReview) 
        }


    

  return (
    <div className='create-review'>
        <div>
</div>
 <div className='reviews-container'>
    {/* <h3>Reviews</h3> */}
 </div>
 {myreviews.map((myreview) => (
          <Delete id={myreview.id} key={myreview.id} myreview={myreview}  onDelete={handleDeleteReview} />
        ))}
         <AddReview onHandleAddReview={handleAddReview}/>
      
    </div>
  )
}



export default NewReview