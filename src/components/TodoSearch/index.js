import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

/*
    // REACT Y ESTADO CON CLASES
    class Component extends React.Component {
        constructor() {
            this.state = {
                patito: ''
            }
        }
        render() {
            return (
                <div onClick={() => this.setState('otro nombre')}>
                    component works! } {this.state.patito}
                </div>
            )
        }
    }

*/

function TodoSearch() {

    const { textSearched, setTextSearched } = React.useContext(TodoContext);

    const onSearchValueChange = (e) => {
        setTextSearched(e.target.value);
    }

    return(
        <input 
            className="TodoSearch" 
            placeholder="escribe una tarea..."
            value={textSearched}
            onChange={(e) => onSearchValueChange(e)}
        />
    );
}

export { TodoSearch };