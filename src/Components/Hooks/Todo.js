import { useState } from "react";
const Todos = () => {
  // Rules Of Hooks
  // 1st Rules you can use The Hooks Only on Functional Component
  // All the Declaration should be on the Top
  //   You cannot declare the hook condtionally
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2> My Todo Application </h2>
      <form>
        <input
          type="text"
          name="todo"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button type="submit" onClick={handleClick}>
          Add Todo
        </button>
      </form>
      {todos.map((todo) => (
        <p>{todo}</p> 
      ))}
    </div>
  );
};
export default Todos;
