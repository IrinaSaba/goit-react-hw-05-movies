import { useState, useEffect } from 'react'
import { lazy, Suspense } from "react"
import { Link, useHistory, useLocation } from 'react-router-dom';
import { Route } from "react-router-dom"
import { useParams } from 'react-router-dom';
import * as getSearchApi from '../../data/GetSearchApi'
import s from './MoviesDetailsPage.module.css'

const Cast = lazy(()=> import("../Cast/Cast"))  
const Reviews = lazy(()=> import("../Reviews/Reviews"))  

export default function MoviesDetailsPage() {
   const history = useHistory();
   const location = useLocation();
   const {movieId} = useParams();

   // console.log(movieId)

   const [movieDetail, setMovieDetail] = useState([]);

   useEffect(() => {
      movieDetail && getSearchApi.getMovieId(movieId).then((setMovieDetail));
   },[]); 

   const handleGoBack = () => {
      history.push(location.state.from);
    };

   return(
       <>
       <button type="button" onClick={handleGoBack}>
        GoBack
      </button>
         <div className={s["movie-detail"]}>
             {movieDetail.poster_path && <img
               src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
               alt={movieDetail.original_title}
            />}
            <div className={s["movie-detail-info"]}>
               <h1>{movieDetail.original_title}</h1>
               <p>User scores: {movieDetail.vote_average}</p>

               <h2>Overview</h2>
               <p>{movieDetail.overview}</p>
               <h3>Genres</h3>
              {movieDetail.genres && <p>{(movieDetail.genres.map(genre => genre.name)).join(" ")}</p>}
            </div>
         </div>
         <hr></hr>
         <div className={s["movie-detail-additional"]}>
            <p>Additional information</p>
            <ul>
               <li>
                  <Link to={{
              pathname: `/movies/${movieId}/cast`,
              state: {
               from: location.state?.from || '/',
               movies: location.state?.movies,
              },
                   }}>Cast</Link>  
               </li>
               <li>
               <Link to={{
              pathname: `/movies/${movieId}/reviews`,
              state: {
               from: location.state?.from || '/',
               movies: location.state?.movies,
              },
                   }}>Reviews</Link>   
               </li>
            </ul>
         </div>
         <hr></hr>
         <Suspense fallback={<h1>Wait a second, look at the sky during waiting...</h1>}>
            <Route path={`/movies/:movieId/cast`}>
               <Cast />
            </Route>
            <Route path={`/movies/:movieId/reviews`}>
               <Reviews />
            </Route>
         </Suspense>
      </>
   )
}