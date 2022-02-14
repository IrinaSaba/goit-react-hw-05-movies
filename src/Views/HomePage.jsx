import { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import * as getSearchApi from '../data/GetSearchApi'


export default function HomePage() {
   // const match = useRouteMatch();
   // console.log( match)
   const [movieList, setMovieList] = useState([]);

useEffect(() => {
   getSearchApi.getPopularMovies().then((setMovieList));
},[]);

   return(
          <ul>
         {movieList.map(movie => (
            <li key={movie.id} style={{margin: "10px", fontSize:"15px"}}>
               <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>  
            </li>
           
         ))}
      </ul>
   )
}