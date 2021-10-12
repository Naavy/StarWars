import React, { FC } from "react";

import "../styles/Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  customClass?: string;
  variant: "big" | "small" | "no-styles";
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  customClass,
  variant,
  disabled,
}) => {
  return (
    <button
      className={`button__${variant} ${customClass ? customClass : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
