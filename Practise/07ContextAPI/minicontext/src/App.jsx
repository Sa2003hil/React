import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <div className=' font-bold text-4xl'>welcome to the context API</div>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
