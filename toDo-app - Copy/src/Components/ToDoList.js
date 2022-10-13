function ToDoList(todos) {
  console.log(todos)
  
  return (
      <ul>
        {todos.map((todo, index) => {
          <li key={index}>{todos.text}</li>
        })}
      </ul>
  )
}

export default ToDoList;