import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <title>404 Not Found</title>
    <p>Sorry, the page you are looking for does not exist</p>
    <Link to="/">Back to homepage</Link>
  </div>
);

export default NotFound;
