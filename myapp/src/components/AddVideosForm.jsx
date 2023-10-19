import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddVideosForm = ({ addVideos }) => {
    const [videos, setVideo] = useState({
        channelName: 'Digital Ocean',
        time: '1 Year',
        link: 'https://youtu.be/7tT9qY0yDVY?si=Mm9FDiy8LydrduC9',
        verified: true,
    });


    function handleSubmit(event) {
        event.preventDefault();
        addVideos(videos);
        console.log(videos);
    }

    function handleChange(event) {
        // event.target.name -> key , event.target.value -> value
        console.log(event.target.name, event.target.value);
        setVideo((videos) => {
            return {
                ...videos,
                [event.target.name]: event.target.value, //put bractes around event.target.name to make it dynamic
            }
        })
    }

    return (
        <div>

            <form className="m-auto flex justify-center mt-14 gap-11 " >
                <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    className="bg-black text-white block p-2 rounded-lg"
                    placeholder="enter title" />
                <input
                    type="text"
                    name="views"
                    onChange={handleChange}
                    className="bg-black text-white block p-2 rounded-lg"
                    placeholder="Views" />
                <input
                    type="text"
                    name="thumbnailUrl"
                    onChange={handleChange}
                    className="bg-black text-white block p-2 rounded-lg"
                    placeholder="Thumbnail img" />

                <button
                    onClick={handleSubmit}
                    className="bg-black text-white rounded-lg p-3">
                    Add Video
                </button>
            </form>
        </div>
    )
}

export default AddVideosForm

