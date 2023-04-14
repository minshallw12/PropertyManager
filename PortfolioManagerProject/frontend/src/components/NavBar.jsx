import LoggedInNavBar from "./LoggedInNavBar";
import LoggedOutNavBar from "./LoggedOutNavBar";
import { useContext } from "react";
import { isLoggedIn } from "../App";

export const NavBar = () => {
    let loginContext = useContext(isLoggedIn);
    console.log(loginContext.logInFlag, '<-- Current User in NavBar.jsx')

    return (
        <div className="navbar_container">
            {
                    loginContext.logInFlag  ? <LoggedInNavBar/> : <LoggedOutNavBar/>
            }
        </div>
    )
}