import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { currUser, logOut, currFlag } from "./utilities"; // currFlag
import { getToken } from "./components/CsrfToken";
import { NavBar } from "./components/NavBar";

export const UserContext = createContext({'user': null})
export const isLoggedIn = createContext({'login': false})


export default function App() {
  const [user, setUser] = useState(null);
  const [logInFlag, setLogInFlag,] = useState(false); 

  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    const getCurrFlag = async () => {
          setLogInFlag(await currFlag())
        }
    getCurrFlag();
    getCurrUser();

    


  }, []);

  function welcomeMessage() {
    if (user.user !== null) {
      return `Welcome ${user.name}`
    }
  };

  function currentUser() {
    if (user.user !== null) {
      return `You are signed in as "${user.name}".`
    }
  }

  function resetUser() {
    setUser({user, user: null})
  }

  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}} >
      <isLoggedIn.Provider value={{logInFlag, setLogInFlag}}>
      <div className="signout_container">
        <button className="button"onClick={()=>logOut(resetUser, setLogInFlag)}><Link to='/'>Sign Out</Link></button>
        <h6>{user && currentUser()}</h6>
      </div>

        <div className="header_container">
          <h1>Property Portfolio Manager</h1>
        </div>

          <NavBar />
          

        

        <div className="center">
          <h2>{user && welcomeMessage()}</h2>
        </div>
      
        <Outlet />
      </isLoggedIn.Provider>
      </UserContext.Provider>

      <div className="center">
        <p>Copyright 2023 - Will Minshall - Code Platoon</p>
      </div>
    </div>
  );
}


