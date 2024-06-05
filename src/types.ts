export interface Todo {
  title: string;
  id: string;
  content?: string;
  isDone: boolean;
}

export type FormData = {
  title: string;
  content?: string;
};

export type ValidField = "title" | "content";
