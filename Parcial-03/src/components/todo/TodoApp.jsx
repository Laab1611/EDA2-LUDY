import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TodoList, TodoAdd } from "../index";
import { addTodo, deleteTodo } from "../../features/todoSlice";
import "../../assets/css/TodoApp.css";

export const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleNewTodo = (newTodo) => {
    dispatch(addTodo(newTodo)); 
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId)); 
  };

  return (
    <div className="centered-container">
      <h1>
        TodoApp
        <br />
        <small> Pendientes: {todos.filter((todo) => !todo.done).length} </small>{" "}
        <br />
        <small> Completadas: {todos.filter((todo) => todo.done).length} </small>{" "}
      </h1>
      <hr />
  
      <div className="todo-section">
        <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
      </div>
  
      <div className="todo-section">
        <h4> Agregar TO-DO </h4>
        <hr />
        <TodoAdd onNewTodo={handleNewTodo} />
      </div>
    </div>
  );  
};

export default TodoApp;