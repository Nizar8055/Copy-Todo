function AddToDo({setToDos}){
    function handleAddToDo(e){
      e.preventDefault();
      console.log(e.target.elements.AddToDo.value);
      const text = e.target.elements.AddToDo.value;
      const todo ={
        id: 4,
        text,
        done:false,
      };
      console.log(todo);
      setToDos((prevTodos) => prevTodos.concat(todo));
    }
  return (
    <form onSubmit={handleAddToDo}>
      <input name="addToDo" type = "text" placeholder="Add new todo"/>
      <button type="submit">Submit</button>
    </form>
  )
};

export default AddToDo;