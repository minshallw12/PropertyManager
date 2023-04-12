import {  useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";

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
      <h3>Log In</h3>
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
    </form>
    </div>
    
  );
};
