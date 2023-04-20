import { Link } from "react-router-dom";

export default function LoggedInNavBar() {
    return (
        <div className="navbar">
            <Link className="nav_links" to={'/dashboard'}>Home</Link>
            <Link className="nav_links" to={'/dashboard'}>My Properties</Link> 
            <Link className="nav_links" to={'/dashboard'}>My Managers</Link>
            <Link className="nav_links" to={'/dashboard/calc'}>Calculator</Link> 
        </div>
    )
};