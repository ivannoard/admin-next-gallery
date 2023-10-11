import React from "react";
import { capitalizeWord } from "../../utils/words";
import "./atoms.scss";

type ButtonType = {
  name: string;
  classButton?: string;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonType>(
  ({ name, classButton }, ref) => {
    return (
      <button className={`button ${classButton}`} ref={ref}>
        {capitalizeWord(name)}
      </button>
    );
  }
);

export default Button;
