import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom"
import { useParams } from 'react-router-dom';
import Cast from '../Cast/Cast'
import Reviews from '../Reviews/Reviews'
import * as getSearchApi from '../../data/GetSearchApi'


export default function MoviesDetailsPage() {
   const {movieId} = useParams()

   // console.log(movieId)

   const [movieDetail, setMovieDetail] = useState([]);

   useEffect(() => {
      movieDetail && getSearchApi.getMovieId(movieId).then((setMovieDetail));
   },[]); 

   // console.log(movieDetail)
//   let genre = (movieDetail.genres.map(genre => genre.name)).join(" ");

   return(
       <>
         <div style={{display:"flex", padding: "10px"}}>
             {movieDetail.poster_path && <img
               src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
               alt={movieDetail.original_title}
            />}
            <div style={{display:"flex", flexDirection:"column", padding: "20px"}}>
               <h1>{movieDetail.original_title}</h1>
               <p>User scores: {movieDetail.vote_average}</p>

               <h2>Overview</h2>
               <p>{movieDetail.overview}</p>
               <h3>Genres</h3>
              {movieDetail.genres && <p>{(movieDetail.genres.map(genre => genre.name)).join(" ")}</p>}
            </div>
         </div>
         <hr></hr>
         <div style={{display:"flex", flexDirection:"column"}}>
            <p>Additional information</p>
            <ul>
               <li>
                  <Link to={`/movies/${movieId}/cast`}>Cast</Link>  
               </li>
               <li>
                  <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>  
               </li>
            </ul>
         </div>
         <hr></hr>
         <Route path="/movies/:movieId/cast">
            <Cast />
         </Route>
         <Route path="/movies/:movieId/reviews">
            <Reviews />
         </Route>
      </>
   )
}