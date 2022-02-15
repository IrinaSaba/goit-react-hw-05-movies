import AppBar from "components/AppBar/AppBar"
import { Route, Switch } from "react-router-dom"
import HomePage from "./Views/HomePage"
import MoviesPages from "./Views/MoviesPages"
import MovieDetailsPage from './components/MoviesDetailsPage/MoviesDetailsPage'
import NotFound from './Views/NotFound'


export default function App()  {
   
   
return (
   <>
   <AppBar />
   <Switch>
      <Route exact path='/'>
         <HomePage/>
      </Route>
      <Route path='/movies/:movieId'>
        <MovieDetailsPage/>
      </Route>
      <Route path='/movies'>
         <MoviesPages/>
      </Route>
      <Route>
         <NotFound />
      </Route>
   </Switch>
   </>
)

};
