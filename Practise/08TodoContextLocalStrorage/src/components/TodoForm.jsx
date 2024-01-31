import React from 'react'
import { Button, Typography } from "@material-tailwind/react";
import { useState } from 'react';
import { useTodoContext } from '../context/TodoContext';

const TodoForm = () => {

    const [todo, setTodo] = useState("");
    const { addTodo } = useTodoContext;

    const add = (e) => {
        e.preventDefault();
        if (!todo) return;
        addTodo({
            todo,
            completed: false,
        })
        setTodo("");
    }

    return (
        <>
            <form onSubmit={add}>
                <div className="relative h-[40vh] flex flex-col text-gray-700 bg-white shadow-md w-[30vw] rounded-xl bg-clip-border">
                    {/* <Typography color="blue-gray" classNameName="flex justify-center m-auto text-gray-500 text-2xl font-thin  gap-1 mb-3">
                    Sign In
                </Typography>
                <hr className=" mb-2 w-[50%] m-auto" /> */}
                    <Typography color="blue-gray"
                        className="flex justify-center m-auto text-4xl gap-1 mb-8">
                        Manage your <span className=" text-pink-400 font-medium">TODOS</span>
                    </Typography>
                    <div className="flex flex-col gap-4 p-6">
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input
                                className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "

                                value={todo}
                                onChange={(e) => {
                                    setTodo(e.target.value)
                                }}
                            />

                            <label
                                className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                Write Todos
                            </label>
                        </div>

                        {/* <div className="-ml-2.5">
                        <div className="inline-flex items-center">
                            <label htmlFor="checkbox" className="relative flex items-center p-3 rounded-full cursor-pointer">
                                <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                    id="checkbox" />
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="checkbox">
                                Remember Me
                            </label>
                        </div>
                    </div> */}
                    </div>
                    <div className="p-6 pt-0">
                        <Button
                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                            type="button">
                            Add
                        </Button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default TodoForm