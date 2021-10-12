import React, { FC, useState, useContext } from "react";
import { StarWarsContext } from "../context/StarWarsContext";
import { users } from "../data/users";
import Button from "../components/Button";

import "../styles/Login.scss";

const Login: FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const { dispatchUser } = useContext(StarWarsContext);

  const checkData = () => {
    const enteredUser = users.find((user) => user.name === name);
    if (enteredUser && enteredUser.password === password) {
      dispatchUser({
        type: "CHANGE_USER",
        payload: { name: name, password: password },
      });
      window.location.href = "/";
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login">
      <input
        placeholder="login"
        className="login__input"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setShowError(false);
        }}
      ></input>
      <input
        type="password"
        placeholder="password"
        className="login__input"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setShowError(false);
        }}
      ></input>
      {showError ? (
        <div className="login__error">
          The username or password is incorrect
        </div>
      ) : null}
      <Button customClass="login__button" onClick={checkData} variant="big">
        Sign in
      </Button>
    </div>
  );
};

export default Login;
