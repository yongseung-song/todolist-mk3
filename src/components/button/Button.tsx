import { ComponentProps } from "react";

function Button({ children, ...props }: ComponentProps<"button">) {
  return <button {...props}>{children}</button>;
}

export default Button;
