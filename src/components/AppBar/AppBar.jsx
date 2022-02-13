// import Navigation from "components/Navigation/Navigation";
import {NavLink} from 'react-router-dom'
import s from "./AppBar.module.css"

export default function AppBar() {
   return(
      <header>
         <nav>
            <NavLink  to="/" 
            className={s.navLinks} 
            activeClassName={s.navActiveLink} >Home</NavLink>

            <NavLink to="/movies" 
            className={s.navLinks}
            activeClassName={s.navActiveLink} >Movies</NavLink>
         </nav>
      </header>
   )
}