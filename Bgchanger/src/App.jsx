import { useState } from 'react'
// import Signin from '../components/Signin'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-1000' style={{ backgroundColor: color }}>
      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
        <div className=' flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full'>
          <button
            className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: 'red' }}
            onClick={() => setColor('red')}
          >
            Red
          </button>
          <button
            className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: 'green' }}
            onClick={() => setColor('green')}
          >
            Red
          </button>
          <button
            onClick={() => setColor('blue')}
            className='outline-none px-4 py-1 rounded-full text-white' style={{ backgroundColor: 'blue' }}
          >
            Red
          </button>
        </div>
      </div>
      <div>
        {/* <Signin /> */}
      </div>
    </div>
  )
}

export default App
