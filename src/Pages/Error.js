import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div id="error" className="container">
        <h1 className="font-weight-bold ml-3"> OHH NO!!</h1>
        <br />
        <h2 className="text-danger font-weight-bold">IT'S A DEAD END</h2>
        <Link to="/" className="btn btn-primary mt-4">
          Back to Home
        </Link>
      </div>
      ;
    </>
  );
};

export default Error;
