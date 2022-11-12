import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="col-lg-8">
      <div className="card">
        <div className="card-body">
          <h1 className="display-4">404 Error!</h1>
          <p className="lead">Page Not Found</p>
          <hr className="my-4" />
          <p>Please Go to Home page</p>
          <p className="lead">
            <Link
              to="/"
              type="button"
              className="btn btn-primary"
            >
              Go Home
            </Link>
          </p>
        </div>
      </div>
      <br />
    </div>
  );
};

export default NotFound;
