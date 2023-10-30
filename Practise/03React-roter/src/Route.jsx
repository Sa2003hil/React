import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Route = () => {
    return (
        <>
            {/* Here Both Header and Footer are fixed and we want that the content between these comes dynamically so to make it dynamic we'll use OUTLETS from react-router-dom  */}
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Route