import React from "react";
import Style from '../Button/styles.module.css';

interface ButtonProps {
  children: any
}

const Button = ({ children }: ButtonProps) => {
  return <button className={Style.buttonPrimary} type="button">{children}</button>;
};

// Button.defaultProps = {
//   btype: "button",
// };

export default Button;
