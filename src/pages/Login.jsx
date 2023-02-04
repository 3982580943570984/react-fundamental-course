import React, { useContext } from "react";
import { AuthContext } from "../components/context";
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", true);
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={login}>
        <Input type="text" placeholder="Enter login" />
        <Input type="password" placeholder="Enter password" />
        <Button>Log in</Button>
      </form>
    </div>
  );
};

export default Login;
