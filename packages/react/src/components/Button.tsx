import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any; // Label for the button
}
const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <button {...props} />;
};

Button.displayName = "Button";

export default Button;
