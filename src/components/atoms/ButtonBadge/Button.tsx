import React from "react";
import { capitalizeWord } from "../../../utils/words";
import "./button-badge.scss";

type ButtonType = {
  name: string;
  classButton?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ name, classButton, ...rest }, ref) => {
    return (
      <button
        type="button"
        className={`button ${classButton}`}
        ref={ref}
        {...rest}
      >
        {capitalizeWord(name)}
      </button>
    );
  }
);

export default Button;
