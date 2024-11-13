import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";

import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Terminar los challenges",
    done: false,
  },
  {
    id: new Date().getTime() + 1000,
    description: "Realizar el proyecto",
    done: true,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (newTodo) => {
    dispatchTodo({ type: "add", payload: newTodo });
  };

  const handleDeleteTodo = (todoId) => {
    dispatchTodo({ type: "delete", payload: todoId });
  };

  return (
    <>
      <h1>
        TodoApp
        <br />
        <small> Pendientes: {todos.filter((todo) => !todo.done).length} </small>{" "}
        <br />
        <small> Completadas: {todos.filter((todo) => todo.done).length} </small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
        </div>

        <div className="col-5">
          <h4> Agregar TO-DO </h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
