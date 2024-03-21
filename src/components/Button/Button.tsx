import { css } from "@emotion/react";
import * as React from "react";

const buttonCss = css({
  borderRadius: "8px",
  border: "1px solid transparent",
  padding: "0.6em 1.2em",
  fontSize: "1em",
  fontWeight: "500",
  fontFamily: "inherit",
  backgroundColor: "#f6f6f6",
  cursor: "pointer",
  transition: "border-color 0.25s",
  "&:hover": {
    borderColor: "#646cff",
  },
  "&:focus": {
    outline: "4px auto -webkit-focus-ring-color",
  },
});

interface ButtonProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

function Button({
  onClick,
  type = "button",
  children,
  ...delegated
}: ButtonProps) {
  return (
    <button css={buttonCss} onClick={onClick} type={type} {...delegated}>
      {children}
    </button>
  );
}

export default Button;
