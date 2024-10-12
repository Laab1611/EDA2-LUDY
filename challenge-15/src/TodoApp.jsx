import { useReducer } from "react";
import TodoReducer from "./components/TodoReducer";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";

const initialState = [{
  id: new Date().getTime(),
  description: 'Hacer los challenges',
  done: false
}];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(TodoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add ToDo',
      payload: todo
    }
    dispatch(action);
  }

  return (
    <>
      <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
      <hr />

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} />
        </div>
        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
}

export default TodoApp;