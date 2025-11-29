import React from "react";
import Child from "./Child";

const Parent = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
      <div>Parent Component</div>

      {isLoggedIn && <div>You are logged in!</div>}

      <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  );
};

export default Parent;
