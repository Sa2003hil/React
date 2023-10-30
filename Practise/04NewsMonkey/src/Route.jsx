import React from 'react'
// importing all the components
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Route = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>

    )
}

export default Route