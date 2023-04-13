import { Link} from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../App";

export const NavBar = () => {
    let context = useContext(UserContext);
    console.log(context.user, '<-- Current User')

    return (
        <div className="navbar_container">
            {
                    context.user  ?
                        <div className="navbar">
                            <Link className="nav_links" to={'/dashboard'}>Home</Link>
                            <Link className="nav_links" to={'/dashboard'}>My Properties</Link> 
                            <Link className="nav_links" to={'/dashboard'}>My Managers</Link>
                            <Link className="nav_links" to={'/dashboard'}>Search</Link> 
                            <Link className="nav_links" to={'/dashboard/calc'}>Calculator</Link> 
                        </div>
                    :
                        <div className="navbar">
                            <Link className="nav_links" to={'/account'}>Create Account</Link>
                            <Link className="nav_links" to={'/'}>Log In</Link>
                        </div>
            }
        </div>
    )
}