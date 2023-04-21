import { Link } from "react-router-dom";

export default function LoggedInNavBar() {
    return (
        <div className="navbar">
            <Link className="nav_links" to={'/dashboard'}>Home</Link>
            <Link className="nav_links" to={'/dashboard/properties'}>My Properties</Link> 
            <Link className="nav_links" to={'/dashboard/managers'}>My Managers</Link>
            <Link className="nav_links" to={'/dashboard/calc'}>Calculator</Link> 
        </div>
    )
};