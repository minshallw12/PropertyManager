import {  useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";
import SpinningGlobe from "./SpinningGlobe"

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
 

  return (
    <div className="login_form_container">
    <form
      onSubmit={(event) => [
        event.preventDefault(),
        logIn(email, password, setUser),
        setEmail(""),
        setPassword(""),
      ]}
    >
      <div className="form_title_container">
        <h3>Log In</h3>
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
        <input type="submit" value="Log In" className="form_item" />
      </div>

    </form>
    </div>
    
  );
};
