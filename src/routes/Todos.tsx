import { LoaderFunction, useLoaderData } from "react-router-dom";

import { TodoType } from "../type/todosType";
import { FC } from "react";

export const loader: LoaderFunction = async () => {
  try {
    const res = await fetch("http://localhost:3000/todos");
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const todos: Array<TodoType> = await res.json();
    return { todos };
  } catch (err) {
    console.log("Err");
    return { todos: [] };
  }
};

export const Todos: FC = () => {
  const { todos } = useLoaderData() as { todos: TodoType[] };
  console.log(todos);
  return (
    <div>
      <h1 className="h1-base">Todos</h1>
      <ul>
        {todos?.map((todo: TodoType) => {
          return (
            <li key={todo.id}>
              <p>
                {todo.id} : {todo.title}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
