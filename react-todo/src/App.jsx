import { useState } from 'react'
import './App.css'
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div>
      <TodoList />
    </div>
    </>
  )
}

export default App
