import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import * as getSearchApi from '../data/GetSearchApi'


export default function MoviesDetailsPage() {
   const {movieId} = useParams()
   console.log(movieId)

   const [movieDetail, setMovieDetail] = useState([]);

   useEffect(() => {
      getSearchApi.getMovieId(movieId).then((setMovieDetail));
   },[]); 

   console.log(movieDetail)
//   let genre = (movieDetail.genres.map(genre => genre.name)).join(" ");

   return(
         <div style={{display:"flex", padding: "10px"}}>
            <img
               src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
               alt={movieDetail.original_title}
            />
            <div style={{display:"flex", flexDirection:"column", padding: "20px"}}>
               <h1>{movieDetail.original_title}</h1>
               <p>User scores: {movieDetail.vote_average}</p>

               <h2>Overview</h2>
               <p>{movieDetail.overview}</p>
               <h2>Genres</h2>
               {/* <p>{genre}</p> */}
            </div>
        </div>
      
   )
}