import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState("");

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChange = (e) => {
        const val = e.target.value;
        setNewTodoValue(val);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodoValue);
        onCancel();
    }

    return(
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
                <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
                >
                    Cancelar
                </button>

                <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );   
}

export { TodoForm };