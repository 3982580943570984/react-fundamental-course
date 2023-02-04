import React from "react";
import classes from "./Button.module.css";

const Button = ({ children, ...props }) => {
    // ...props - позволяет разворачивать переданные props
  return <button {...props} className={classes.btn}>{children}</button>;
};

export default Button;
