import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //^ this is how the todo data'll inserted in the array
    todos: [
        {
            id: 1,
            todo: "Todo Message",
            completed: 'false',
        },
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { }, // because update needs two things id of the todo and the todo itself
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
});


//^ create a custom hook to use the context
export const useTodoContext = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;