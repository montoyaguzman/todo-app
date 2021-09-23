import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {

    const { 
        item: todos, 
        saveItem: updateTodos, 
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [textSearched, setTextSearched] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const todosCompleted = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    
    let filtersTodos = [];
    
    if(textSearched.length >= 1) {
        filtersTodos = todos.filter(todo =>  {
        const todoText = todo.text.toLowerCase();
        const searchText = textSearched.toLowerCase();
        return todoText.includes(searchText)
        });
    } else {
        filtersTodos = todos;
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false
        });
        updateTodos(newTodos);
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [ ...todos ];
        newTodos[todoIndex].completed = true;
        updateTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [ ...todos ];
        newTodos.splice(todoIndex, 1);
        updateTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            totalTodos,
            todosCompleted,
            textSearched,
            setTextSearched,
            filtersTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };