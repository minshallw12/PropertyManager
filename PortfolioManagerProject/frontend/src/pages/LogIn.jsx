import {  useContext, useState } from "react";
import { logIn } from "../utilities";
import { UserContext } from "../App";
import SpinningGlobe from "../components/SpinningGlobe"

export const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const context = useContext(UserContext)
  const {setUser} = context
  console.log(context.user, '<-- context Login.jsx')


  return (
    
    <div className="login_form_container">
      <form
        onSubmit={(event) => { // bug here, every login shows "Log in failed" even with proper formatting
          if (context.user === null || context.user.user === null) {
            console.log('This user does not exist')
          } else {
            [
              event.preventDefault(),
              logIn(email, password, setUser),
              setEmail(""),
              setPassword(""),
            ]
          }
          }}
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
