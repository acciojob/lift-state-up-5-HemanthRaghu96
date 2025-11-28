import React from "react";

const Child = ({ isLoggedIn }) => {
  return <>{isLoggedIn && <div>You are logged in!</div>}</>;
};

export default Child;
