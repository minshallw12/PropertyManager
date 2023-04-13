import "./App.css";
import { createContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";
import { NavBar, RealEstateNavBar } from "./components/NavBar";

export const UserContext = createContext({'user': null})


export default function App() {
  const [user, setUser] = useState(null);


  getToken()

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
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

  console.log(user, 'user App.jsx')
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}} >

      <div className="signout_container">
        <button className="button"onClick={()=>logOut(setUser)}><Link to='/'>Sign Out</Link></button>
        <h6>{user && currentUser()}</h6>
      </div>

        <div className="header_container">
          <h1>Property Portfolio Manager</h1>
        </div>

          <NavBar />
          {/* <RealEstateNavBar/> */}

        

        <div className="center">
          <h2>{user && welcomeMessage()}</h2>
        </div>
      
        <Outlet />

      </UserContext.Provider>

      <div className="center">
        <p>Copyright 2023 - Will Minshall - Code Platoon</p>
      </div>
    </div>
  );
}


