import { ComponentProps } from "react";

function Button({ children, ...props }: ComponentProps<"button">) {
  return (
    <button
      {...props}
      className="block w-fit rounded-md border-2 border-blue-500 px-6 py-4 hover:bg-blue-500 hover:text-white"
    >
      {children}
    </button>
  );
}

export default Button;
