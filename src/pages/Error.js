import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>Oh no! Page not found.</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  );
}

export default Error;
