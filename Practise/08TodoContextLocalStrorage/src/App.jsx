import './App.css'
import { TodoProvider } from './context/TodoContext';
import { useEffect, useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

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
    console.log(id);
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }





  //  In locaStorage all the data is stored in string format so we have to change this to object format by using JSON.parse everytime we get the data from localStorage



  // ^ This is how we get the data in localStorage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      {/* <div className="bg-[#172842] min-h-screen py-8"> */}
      <div className="w-full mx-auto shadow-md bg-white rounded-lg px-4 py-3 text-white">
        {/* <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1> */}
        <div className="mb-4" >
          {/* Todo form goes here */}
          <TodoForm />

        </div>
        <div className="flex flex-wrap flex-col items-center justify-center gap-y-3  "  >
          {/*Loop and Add TodoItem here */}
          {todos.map((todo) => (
            <div key={todo.id} className='transition-all ease-in-out transition-0.2s'>
              <TodoItem key={todo.id} todo={todo} />
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </TodoProvider>
  )
}

export default App
