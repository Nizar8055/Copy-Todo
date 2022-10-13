import AddToDo from './Components/AddToDo';
import Demo from './Components/Demo';
import ToDoList from './Components/ToDoList';
import logo from './logo.svg';
import { useState } from "react";
// import './App.css';

function App() {
  const [todos, SetToDos] = useState([
    {id: 1, text: "Book Ticket", done: false},
    {id: 2, text: "wash clothes", done: false},
    {id: 3, text: "write Homework", done: false},
  ])
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoList todos={todos}/>
      <AddToDo SettoDos={setToDos}/>
      {/* <Demo /> */}
    </div>
  );
}

export default App;
