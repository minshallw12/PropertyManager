import { Link } from "react-router-dom"

export const NavBar = ()=> {
    return (
        <div className="navbar_container">
            <Link to={'/account'}>Create Account</Link>
            <Link to={'/'}>Log In</Link>
        </div>
    )
}