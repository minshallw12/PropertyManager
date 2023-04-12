import { useState } from "react";
import { signUp } from "../utilities";
import SpinningGlobe from './SpinningGlobe'

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <form
      onSubmit={(event) => [
        event.preventDefault(),
        signUp(name, email, password),
        setEmail(""),
        setPassword(""),
        setName(""),
      ]}
      style={{ display: "flex", flexDirection: "column" }}
      className="login_form_container"
    >
      <h3>Sign Up</h3>
      <SpinningGlobe/>
   
      <input
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="form_item"
      />
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
      <input type="submit" value="Create account" className="form_item"/>
    </form>
  );
};
