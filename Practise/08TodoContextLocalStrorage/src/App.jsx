import './App.css'
import { TodoProvider } from './context/TodoContext';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  //^ this is how we set the todos 
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // setTodos((oldArray)=>[...puraniValues,nyaTodo])
    // setTodos((oldArray)=>[{...ObjectOfNyaTodo},puraniValues])
  }

  //^ Update the todos 
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
    // setTodos((prevStateOfArray) => prev.map((IndividualprevTodo) => (IndividualprevTodo.id === id ? nyaTODO : puranaTodo)));
  }



  //^ Delete the todos
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  //^ Toggle the todos
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? { ...prevTodo, completed: !prevTodo } : prevTodo));
  }


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
