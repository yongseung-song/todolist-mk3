import { ComponentProps } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { FormData, ValidField } from "../../types";

interface InputProps extends ComponentProps<"input"> {
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
  withLabel?: boolean;
  name: ValidField;
}

function Input({ register, error, withLabel, name, ...props }: InputProps) {
  return (
    <div className="relative flex items-center justify-center gap-3 py-3">
      {withLabel ? (
        <label className="font-semibold" htmlFor={name}>
          {name}
        </label>
      ) : null}
      <input
        {...register(name)}
        {...props}
        className="rounded-md border-2 border-blue-500/0 px-2 py-2 outline-none focus:border-blue-500"
      />
      {error && (
        <span className="absolute -bottom-4 right-0 text-[10px] text-red-500">
          {error.message}
        </span>
      )}
    </div>
  );
}

export default Input;
