import { useState } from "react";
import { signUp } from "../utilities";

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
    >
      <h3>Sign Up</h3>
      <input
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <input type="submit" value="signUp" />
    </form>
  );
};
