import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    
    const showModal = () => {
        props.setOpenModal(prevState => !prevState);
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={showModal}
        >
            +
        </button>
    );
}

export { CreateTodoButton };