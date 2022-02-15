import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import * as getSearchApi from '../../data/GetSearchApi'

export default function Reviews() {
  
   const {movieId} = useParams()
   const [reviesList, setReviesList] = useState([]);

useEffect(() => {
   getSearchApi.getMovieIdReview(movieId).then((setReviesList));
},[movieId]);
// console.log(reviesList.results.length)
   return(
         <ul>  
            {reviesList.results && reviesList.results.length === 0 ? <p> We do not have any review for this movie</p> : reviesList.results 
            && reviesList.results.map(review => (
               <li key={review.id}>
                  <h3>{review.author}</h3>
                  <p>{review.content}</p>
               </li> 
               ))
               }
         </ul>
   )
}
