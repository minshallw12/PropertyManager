import { Link} from "react-router-dom"
import { useContext } from "react";
import { UserContext, isLoggedIn } from "../App";

export const NavBar = () => {
    let context = useContext(UserContext);
    let loginContext = useContext(isLoggedIn);
    console.log(context.user, loginContext.logInFlag, '<-- Current User in NavBar.jsx')

    return (
        <div className="navbar_container">
            {       //logged-in Navbar
                    loginContext.logInFlag  ?
                        <div className="navbar">
                            <Link className="nav_links" to={'/dashboard'}>Home</Link>
                            <Link className="nav_links" to={'/dashboard'}>My Properties</Link> 
                            <Link className="nav_links" to={'/dashboard'}>My Managers</Link>
                            <Link className="nav_links" to={'/dashboard'}>Search</Link> 
                            <Link className="nav_links" to={'/dashboard/calc'}>Calculator</Link> 
                        </div>
                    :
                    //logged-out Navbar
                        <div className="navbar">
                            <Link className="nav_links" to={'/account'}>Create Account</Link>
                            <Link className="nav_links" to={'/'}>Log In</Link>
                        </div>
            }
        </div>
    )
}