// import Card from './components/Card'
import Navbar from './components/Navbar'
// import Section from './components/Section'
import Eventcard from './components/Eventcard'

function App() {


  return (
    <>
      <div className="">
        <Navbar />
      </div>
      {/* <Section /> */}
      <div className="w-screen h-90 pl-40 px-2">
        <Eventcard />
      </div>
      {/* <Card /> */}
      {/* <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind and Props</h1> */}

    </>
  )
}

export default App
