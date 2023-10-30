import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const { userid } = useParams()
    return (
        <div className=' m-auto flex justify-center bg-violet-500 p-7 text-white text-2xl'>User:{userid} </div>
    )
}

export default User