import AppBar from "components/AppBar/AppBar"
import { lazy, Suspense } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

const HomePage = lazy(()=> import("./Views/HomePage"))  
const MoviesPages = lazy(()=> import("./Views/MoviesPages"))  
const MovieDetailsPage = lazy(()=> import( './components/MoviesDetailsPage/MoviesDetailsPage')) 


export default function App()  {
   
   
return (
   <>
      <AppBar />
      <Suspense fallback={<h1>Wait a second, look at the sky during loading...</h1>}>
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
            <Redirect to="/"/>
         </Switch>
      </Suspense>
   </>
)

};
