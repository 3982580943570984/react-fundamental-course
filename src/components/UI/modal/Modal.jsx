import React from "react";
import classes from "./Modal.module.css";

export const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [classes.modal];
  if (visible) rootClasses.push(classes.modal_active);
  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      <div className={classes.modal_content} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
