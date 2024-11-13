import React from 'react';
import { useTodo } from '../hooks/useTodo';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    countTodos,
    countPendingTodos
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp
        <br />
        <small> Pendientes: {countPendingTodos()} </small>{" "}
        <br />
        <small> Completadas: {countTodos() - countPendingTodos()} </small>{" "}
      </h1>
      <hr />

      <div className="row">
        <div className="col-3">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo}/>
        </div>

        <div className="col-4">
          <h4> Add TO-DO </h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};