import { Link } from "react-router-dom";

export default function LoggedOutNavBar() {
    return (
        <div className="navbar">
            <Link className="nav_links" to={'/account'}>Create Account</Link>
            <Link className="nav_links" to={'/'}>Log In</Link>
        </div>
    )
};