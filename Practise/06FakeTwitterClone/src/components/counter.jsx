import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus, faMinus)

function Counter () {
  const [number, setNumber] = useState(0)

  function handleUpClick (e) {
    e.stopPropagation()

    // setTimeout(() => {
    //   setNumber(number + 1)
    // }, 2000)
    // In this case if i click the button 5 times , the number will be update only one time -- but there are some application which wants that any number of time user click on value the cart will update that times -----> but there is an updater function that will update it 5 times

    // In this case if i click the button 5 times , the number will be update 5 times
    // setTimeout(() => {
    //   setNumber(() => number + 1)
    // }, 2000)

    setNumber(number + 1)
    // Use the setNumber function to update the state
    console.log('Yes', number)
  }

  function handleLoClick (e) {
    e.stopPropagation()
    if (number > 0) {
      setNumber(number - 1)
    }
    console.log('No', number)
  }

  return (
    <div className='flex m-auto '>
      <p className='m-5'>Cart: {number}</p>
      <button onClick={handleUpClick}>
        <FontAwesomeIcon
          className='bg-black p-2  rounded-3xl  '
          icon='fa-solid fa-plus'
          size='xl'
          style={{ color: '#ffffff' }}
        />
      </button>
      <button onClick={handleLoClick}>
        <FontAwesomeIcon
          className='bg-black p-2  rounded-3xl ml-2 '
          icon='fa-solid fa-minus'
          size='xl'
          style={{ color: '#ffffff' }}
        />
      </button>
    </div>
  )
}

export default Counter
