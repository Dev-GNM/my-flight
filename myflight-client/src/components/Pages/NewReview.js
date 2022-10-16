import React from 'react'

function NewReview() {
  return (
    <div className='create-review'>
        <div>
         <form className="new-post">

<input type="text" name="title" placeholder="Review title" />
<input type="text" name="description" placeholder="Review description"/>
<input type="text" name="score" placeholder="score"/>
<button type="submit">Create Review</button>

</form>
</div>
 <div className='reviews-container'>
    <h3>Reviews</h3>
 </div>
      
    </div>
  )
}



export default NewReview