import React, { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Learn Testing", completed: false },
      ]);
      const [newTodo, setNewTodo] = useState("");
    
      const addTodo = () => {
        if (newTodo.trim()) {
          setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
          setNewTodo("");
        }
      };
    
      const toggleTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
    
      const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      };
    
      return (
        <div>
          <h1>Todo List</h1>
          <div>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a todo"
            />
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  cursor: "pointer",
                }}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
                <button onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default TodoList;
   