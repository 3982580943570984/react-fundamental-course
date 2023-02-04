import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context";
import Button from "../button/Button";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="nav_bar">
      <Button onClick={logout}>Log out</Button>
      <div className="nav_bar__links">
        <Link to="/about">About site</Link>
        <Link to="/posts">Check posts</Link>
      </div>
    </div>
  );
};

export default Navbar;
