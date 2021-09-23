import React from "react";
import { TodoCounter } from "./components/TodoCounter/";
import { TodoSearch } from "./components/TodoSearch/";
import { TodoList } from "./components/TodoList/";
import { TodoItem } from "./components/TodoItem/";
import { CreateTodoButton } from "./components/CreateTodoButton/";
import { TodoContext } from './components/TodoContext/';
import { Modal } from './components/Modal/'; 
import { TodoForm } from "./components/TodoForm";

function AppUI () {

  const {
    error, 
    loading, 
    filtersTodos, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>  
      <TodoList>
        { error && <p>¡La App no esta funcionando!</p>}
        { loading && <p>loading normal...</p>}
        { (!loading && filtersTodos.length < 1) && <p>no hay tareas para mostrar...</p>}
        {filtersTodos.map((todo, index) => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
        ))}
      </TodoList>
          {openModal && (
            <Modal>
              <p>
                <TodoForm/>
              </p>
            </Modal>
          )}
      <CreateTodoButton setOpenModal={setOpenModal}/>
    </React.Fragment>
  );
}

export { AppUI };
