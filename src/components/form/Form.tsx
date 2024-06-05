import { zodResolver } from "@hookform/resolvers/zod";
import { ComponentProps } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { useTodoContext } from "../../context/todo.context";
import { Todo } from "../../types";
import Button from "../button";
import Input from "../input";
import { TodoSchema } from "./formSchema";

function Form({ ...props }: ComponentProps<"form">) {
  const todo = useTodoContext();
  type FormType = z.infer<typeof TodoSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const newTodo: Todo = { ...data, isDone: false, id: crypto.randomUUID() };
    todo.add(newTodo);
    reset();
  };

  return (
    <form
      className="flex items-center justify-center gap-3 text-blue-600"
      {...props}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        name={"title"}
        error={errors.title}
        register={register}
        withLabel={true}
      />
      <Input
        name={"content"}
        error={errors.content}
        register={register}
        withLabel={true}
      />
      <Button className="" type="submit">
        등록
      </Button>
    </form>
  );
}

export default Form;
