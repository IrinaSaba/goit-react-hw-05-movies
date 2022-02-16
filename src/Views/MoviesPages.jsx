import * as getSearchApi from '../data/GetSearchApi'
import Form  from '../components/Form/Form';
import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import qs from "query-string";
import s from '../components/Error/error.module.css'


export default function MoviesPages() {
  const history = useHistory();
  const location = useLocation();

  const search = qs.parse(location.search);

  const { query } = search;

  const [movieByInput, setMovieByInput] = useState([]);
  const [error, setError] = useState(null);

  const setSearch = (input) => {
   history.push({ pathname: "/movies", search: "?query=" + input }); // {pathname: ""/gallery, search: "?query=cat", hash: "#eruyiu", state: undefined}
 };
  
 useEffect(() => {
   query && getSearchApi.getMovieByInput(query).then((setMovieByInput))
   .catch((error) => setError(error.message))
   setError('')
 }, [query]);

//  console.log(movieByInput);

   return (
      <>
         <Form setSearch={setSearch}/>
         {!error ? (
        <ul>
            {movieByInput &&  
            movieByInput.map(movie => (
               <li key={movie.id} style={{margin: "10px", fontSize:"15px"}}>
                  <Link to={{
              pathname: `movies/${movie.id}`,
              state: { from: location},
            }}>{movie.original_title}</Link>  
               </li>))
            }
         </ul>
      ) : (
         <p className={s["error"]}>{error}</p>
      )}
         
      </>
   )
}