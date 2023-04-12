import { Link} from "react-router-dom"
import { useContext } from "react";
import { UserContext } from "../App";


export const NavBar = () => {
    let context = useContext(UserContext);
    console.log(context.user, '<-- Current User')

    return (
        <div className="navbar_container">
            {/* <Link className="nav_links" to={'/account'}>Create Account</Link>
            <Link className="nav_links" to={'/'}>Log In</Link> */}
            {/* {
                context.user && <Link className="nav_links" to={'/dashboard'}>Enter</Link>
            } */}
            {
                context.user === '{user: null}' ?
                <Link className="nav_links" to={'/dashboard'}>Enter</Link> :
                <div className="navbar">
                    <Link className="nav_links" to={'/account'}>Create Account</Link>
                    <Link className="nav_links" to={'/'}>Log In</Link>
                </div>
            }
            
        </div>
    )
}