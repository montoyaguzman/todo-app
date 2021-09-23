import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';
/*
const styles = {
    color: 'red',
    backgroundColor: 'yellow',
}
*/
function TodoCounter() {
    const { totalTodos, todosCompleted } = React.useContext(TodoContext);
    return(
        /*<h2 style={styles}>Has completado 2 de 3 tareas</h2>*/
        <h2 className="TodoCounter">Has completado {todosCompleted} de {totalTodos} tareas</h2>
    );
}

export { TodoCounter };