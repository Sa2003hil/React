import { useState, useCallback, useEffect } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characters, setCharAllowded] = useState(false)
  const [Password, setPassword] = useState("")

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }
    else {
      str += "!@#$%^&*()_+[]{}"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, setPassword])

  useEffect(() => {
    passGenerator()

  }, [length, numberAllowed, characters, setPassword, passGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl bg-black p-20 w-100 h-40vh'>
        <div className=' h-40vh shadow-md rounded-lg overflow-hidden mb-4'>
          <h1 className="text-center text-3xl font-bold my-4">Password Generator</h1>
          <div className='flex'>
            <input
              type="text"
              value={Password}
              className='mr-6 h-9  max-w-md rounded-lg outline-none w-full py-1 px-3'
              placeholder='Password'
            />
            <button className=' hover: bg-purple-700   text-center w-40 h-9.5 mt-4 p-1'>
              Copy
            </button>
          </div>
          {/* <button className=" outline-none shrink-0 hover:bg-indigo-600 text-center w-40 h-10 mt-4  p-1 justify-center m-auto ">
            Generate
          </button> */}
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label >Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAllowed((prev) => (!prev))  // means if it is true then it will be false and vice versa
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='charcInput'
              onChange={() => {
                setCharAllowded((prev) => (!prev))  // means if it is true then it will be false and vice versa
              }}
            />
            <label htmlFor="charcInput">Charaters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
