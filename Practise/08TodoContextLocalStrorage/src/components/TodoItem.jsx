import React, { useState } from 'react'
import { useTodoContext } from '../context/TodoContext';
import { Checkbox, Button } from "@material-tailwind/react";
function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false)
    const { updateTodo, deleteTodo, toggleComplete } = useTodoContext();
    const [todoMsg, setTodoMsg] = useState(todo.todo);


    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }

    const toggleCompleted = () => {
        // console.log(todo.id);
        toggleComplete(todo.id);
    }



    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-xl duration-300 s  text-black ${todo.completed ? "bg-[#487223]" : "bg-[#000000]"
                }`}
        >
            <Checkbox
                className='bg-white cursor-pointer'
                // type='checkbox'
                checked={todo.completed}
                onChange={toggleCompleted}
            />

            <input
                type="text"
                className={`border outline-none w-full text-white bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <Button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center mt-1 bg-gray-50 hover:shadow-slate-700 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </Button>
            {/* Delete Todo Button */}
            <Button
                className="inline-flex w-8 h-8 mt-1 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </Button>
        </div>
    );
}

export default TodoItem;
