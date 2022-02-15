import AppBar from "components/AppBar/AppBar"
import { lazy, Suspense } from "react"
import { Route, Switch } from "react-router-dom"

const HomePage = lazy(()=> import("./Views/HomePage"))  
const MoviesPages = lazy(()=> import("./Views/MoviesPages"))  
const MovieDetailsPage = lazy(()=> import( './components/MoviesDetailsPage/MoviesDetailsPage')) 
const NotFound = lazy(()=> import('./Views/NotFound'))  


export default function App()  {
   
   
return (
   <>
      <AppBar />
      <Suspense fallback={<h1>Wait a second, look at the sky during waiting...</h1>}>
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
               <HomePage/>
            </Route>
         </Switch>
      </Suspense>
   </>
)

};
