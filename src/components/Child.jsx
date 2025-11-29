import React from "react";

const Child = ({ isLoggedIn, setIsLoggedIn }) => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    if (name.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <>
      {!isLoggedIn && (
        <form>
          <label htmlFor="name">Username:</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button type="button" onClick={handleSubmit}>
            Login
          </button>
        </form>
      )}
    </>
  );
};

export default Child;
