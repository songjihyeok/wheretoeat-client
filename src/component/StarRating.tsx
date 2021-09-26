import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
import styled from "styled-components"




const StarRating : React.FC = ()=> {

  const [rating, setRating] = useState(5)

 const onStarClick=(nextValue:number, prevValue:number, name:string) =>{
  setRating( nextValue);
}

  
  return (                
    <div style={{fontSize: 30}}>
      <StarRatingComponent 
        name="starrate" 
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      />
    </div>
  );
}

export default StarRating