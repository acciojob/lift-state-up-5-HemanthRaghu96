import React from "react";
import Child from "./Child";

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    if (name && password) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };
  return (
    <>
      <div>Parent Component</div>
      {!isLoggedIn && (
        <form action="">
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input type="button" value="Login" onClick={handleSubmit} />
        </form>
      )}

      <Child isLoggedIn={isLoggedIn} />
    </>
  );
};

export default Parent;
