import React from "react";
import Child from "./Child";

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      <div><h1>Parent Component</h1></div>

      {isLoggedIn && <p>You are logged in!</p>}

      {/* Passing state and setter to child */}
      <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Parent;
