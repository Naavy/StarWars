import React, { FC } from "react";
import { Link } from "react-router-dom";

const ProblemAccess: FC = () => {
  return (
    <>
      <p>You cannot access this page</p>
      Please, <Link to="/login">sign in</Link>
    </>
  );
};

export default ProblemAccess;
