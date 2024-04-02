import React from "react";

import { css } from "@emotion/react";
import { ButtonProps } from "./types";

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

function Button(
  { onClick, type = "button", children, ...delegated }: ButtonProps,
  ref: React.Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      css={buttonCss}
      onClick={onClick}
      type={type}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
