import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  // The functionality of the lightTheme and darkTheme methods are not yet implemented in the ThemeProvider context, so we can make the functionality it in the compenent itself by defining the methods(names must be same as in the context)

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }


  // acctual change in the theme

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className=' text-lg font-semibold'>Welcome to the theme switcher</div>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Themebtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Cards */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
