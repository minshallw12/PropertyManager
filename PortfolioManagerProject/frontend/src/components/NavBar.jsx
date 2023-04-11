import { Link } from "react-router-dom"

export const NavBar = ()=> {
    return (
        <div>
            <h1>Auth</h1>
            <Link to={'/'}>Sign UP</Link>
            <Link to={'/login/'}>LogIn</Link>
        </div>
    )
}