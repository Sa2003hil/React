// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/sa2003hil')
    //         .then(response => response.json()) // res is in string so we have to convert it into json
    //         .then(data => {
    //             console.log(data) // here we need the state so we have to use useState
    //             setData(data)
    //         })


    // }, [])
    return (
        <div >
            <div className=' bg-slate-900  w-96 m-auto '>
                <div className=' text-center  text-white p-4 text-3xl'>Github Followers : {data.followers} </div>
                <img src={data.avatar_url} alt="GitPic" width={300} className=' m-auto flex justify-center' />
            </div>
        </div>
    )
}

export default Github


export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sa2003hil')
    return response.json()

}