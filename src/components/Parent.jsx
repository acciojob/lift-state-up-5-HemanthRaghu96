import React from "react";
import Child from "./Child";

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      <div>Parent Component</div>

      {isLoggedIn && <div>You are logged in!</div>}

      {/* Passing state and setter to child */}
      <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default Parent;
