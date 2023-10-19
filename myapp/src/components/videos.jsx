// import React from 'react';
import PropTypes from 'prop-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

library.add(fab, faCheckSquare, faCoffee)

const VideoThumbnail = ({
    thumbnailUrl,
    channelName,
    views,
    time,
    verified,
    title,
    link
}) => {
    // let verified = true;
    // let channelJSX;
    // if (verified) {
    //     channelJSX = <div className="text-sm font-thin mb-1 hover:text-gray-500">{channelName}✅</div>
    // }
    // else {
    //     channelJSX = <div className="text-sm font-thin mb-1 hover:text-gray-500">{channelName}</div>
    // }

    // click events
    // let playing = false;
    // console.log('Rendering App');
    const [playing, setPlaying] = useState(false)


    function handleClick(e) {
        console.log(e)
        e.stopPropagation()
        // e.preventDefault()
        if (playing) {

            console.log('Paused');
        } else {
            console.log('Playing');
        }

        // playing = !playing
        setPlaying(!playing);

    }

    return (

        <div className='max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:bg-gray-100 cursor-pointer '>
            <div className='relative'>
                <img
                    className='w-full h-48 object-cover'
                    src={thumbnailUrl}
                    alt='Video Thumbnail'
                />
                {/* Centered FontAwesome icon */}
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                    <FontAwesomeIcon
                        icon='fa-brands fa-youtube'
                        size='2xl'
                        style={{ color: '#d01616' }}
                    />
                </div>
            </div>

            <div className='px-6 py-4'>
                <div className='font-bold text-base'>{title}</div>
                {/* {channelJSX} */}
                {/* {verified ? <div className="text-sm font-thin mb-1 hover:text-gray-500">{channelName}✅</div> : <div className="text-sm font-thin mb-1 hover:text-gray-500">{channelName}</div>} */}

                {/* <div className="text-sm font-thin mb-1 hover:text-gray-500">{channelName}{verified ? '✅' : null}</div> */}

                <div className='text-sm font-thin mb-1 hover:text-gray-500'>
                    {channelName}
                    {verified && '✅'}
                </div>

                <div className='flex'>
                    <p className='text-gray-700 text-sm'>
                        {views} <span className='text-gray-600'>views</span>
                    </p>

                    <p className='text-gray-700 text-sm flex'>
                        <span className='text-gray-600'>. {time} ago</span>
                    </p>
                </div>
                <div>
                    <button
                        onClick={handleClick}
                        className=' p-1 text-xs w-14 item-center flex justify-center text-center hover:bg-blue-gray-900 m-auto bg-black text-white rounded-lg font-light'
                    >
                        <a href={link}>{playing ? 'Pause' : 'Play'}</a>
                    </button>
                </div>
            </div>
        </div>

    )
}

VideoThumbnail.propTypes = {
    thumbnailUrl: PropTypes.string.isRequired,
    channelName: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
    link: PropTypes.string.toString,
    title: PropTypes.string.isRequired
}

export default VideoThumbnail
