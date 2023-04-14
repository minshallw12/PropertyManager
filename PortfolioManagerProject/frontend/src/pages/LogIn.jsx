import {  useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext, isLoggedIn } from "../App";
import SpinningGlobe from "../components/SpinningGlobe"

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext)
  const loginContext = useContext(isLoggedIn)
  const {setUser} = context
  const {setLogInFlag} = loginContext


  return (
    
    <div className="login_form_container">
      <form
        onSubmit={(event) => { 
          // 
            [
              event.preventDefault(),
              logIn(email, password, setUser, setLogInFlag), //<-- bug here ?
              setEmail(""),
              setPassword(""),
            ]
          }
        }
        
      >
        <div className="form_title_container">
          <h3>Please Log In</h3>
        </div>
        <div className="center">
          <SpinningGlobe />
        </div>
        <div className="input_container">
          <input
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form_item"
          />
          <input
            placeholder="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form_item"
        />
          <input type="submit" value="Log In" className="form_item button"  />
        </div>
      </form>
    </div>
    
  );
};
