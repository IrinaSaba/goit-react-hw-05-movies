// import MoviesList  from '../components/MoviesDetailsPage/MoviesDetailsPage';
import * as getSearchApi from '../data/GetSearchApi'
import Form  from '../components/Form/Form';
import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import qs from "query-string";


export default function MoviesPages() {
  const history = useHistory();
  const location = useLocation();

  const search = qs.parse(location.search);

  const { query } = search;

  const [movieByInput, setMovieByInput] = useState([]);

  const setSearch = (input) => {
   history.push({ pathname: "/movies", search: "?query=" + input }); // {pathname: ""/gallery, search: "?query=cat", hash: "#eruyiu", state: undefined}
 };
  
 useEffect(() => {
   query && getSearchApi.getMovieByInput(query).then((setMovieByInput));
   setSearch('')
 }, [query]);

 console.log(movieByInput);

//  if(movieByInput && movieByInput.length === 0)
//    return alert ('SERGEY we do not have any porno, sorry')

   return (
      <>
         <Form setSearch={setSearch}/>
         <ul>
            {movieByInput &&  
            movieByInput.map(movie => (
               <li key={movie.id} style={{margin: "10px", fontSize:"15px"}}>
                  <Link to={`movies/${movie.id}`}>{movie.original_title}</Link>  
               </li>))
            }
         </ul>
      </>
   )
}