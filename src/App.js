// import './App.css';
import React from "react";
import { TodoProvider } from './components/TodoContext/';
import { AppUI } from './AppUI';

function App(props) {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
