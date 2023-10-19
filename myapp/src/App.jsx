// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Testimonial from './components/Testimonials'
// import Navbar from './components/Navbar'
import { useState } from 'react'
import Herosection from './components/Herosection'
import Footer from './components/Footer'
// import Signin from './components/Signin'
import Ecommerce from './components/Ecommerce'
import Company from './components/Company'
import Video from './components/videos';
import './App.css'
import videosDB from './data/videodata';
import Newsletter from './components/Newsletter'
import Posts from './components/Posts'
// import Counter from './components/counter';
import Postinfo from './components/Posting'
import AddVideosForm from './components/AddVideosForm'



function App() {
  // const [count, setCount] = useState(0)
  // const Email = "Email Dedo"
  // const Field = "Password Dedo"

  // let videos = [
  //   {
  //     channelName: 'Nike Official',
  //     views: '220k',
  //     thumbnailUrl: 'https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/e6424c44-7b50-4acb-8c40-aa9712c29924/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg',
  //     time: '1 Year',
  //     title: 'Nike Shoes Review',
  //     verified: false,
  //   },
  //   {
  //     channelName: 'Technical Suneja',
  //     views: '20M',
  //     thumbnailUrl: 'https://i.ytimg.com/vi/KR5PI7yFrAI/maxresdefault.jpg',
  //     time: '10 hours',
  //     title: 'ReactJS Crash Course',
  //     verified: true
  //   }

  // ]  // Put this data of videos in a separate file and import it here this is called Refactoring

  const [videos, setVideos] = useState(videosDB);

  function addVideos(video) {
    setVideos([
      ...videos,
      { ...video, id: videos.length + 1 }
    ])
  }
  // console.log('Rendering App');

  return (
    <>
      {/* <h1 className=' bg-green-400 p-5 rounde font-bold text-center '>this is tailwind</h1> */}
      {/* <Navbar />
      <Testimonial /> */}
      <Herosection />
      <Company />
      <Ecommerce />
      <AddVideosForm addVideos={addVideos} />

      <div className='flex mt-10 mx-20 flex-wrap gap-9'>
        {/* <Video
          channelName='Nike Official'
          views='220k'
          thumbnailUrl='https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/e6424c44-7b50-4acb-8c40-aa9712c29924/nike%E2%80%99s-best-casual-shoes-for-everyday-wear.jpg'
          time='1 Year'
          title='Nike Shoes Review'
          verified={false} />
        <Video
          channelName='Technical Suneja'
          views='20M'
          thumbnailUrl='https://i.ytimg.com/vi/KR5PI7yFrAI/maxresdefault.jpg'
          time='10 hours'
          title='ReactJS Crash Course'
          verified={true} /> */}

        {/* This is another method of displaying data using map function */}
        {
          videos.map((video, index) => (
            <Video
              key={index} // Assuming 'index' is unique for each video
              channelName={video.channelName}
              views={video.views}
              thumbnailUrl={video.thumbnailUrl}
              time={video.time}
              title={video.title}
              link={video.link}
              verified={video.verified}
            />
          ))
        }



        {/* <Video

        // onPlay={() => console.log('playing')}
        // onPause={() => console.log('paused')}

        // key='3'
        // channelName='Elvish Yadav'
        // views='2M'
        // thumbnailUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNp4iIxTIoN1GcrOQjHnRrnfOy9e2_4_cZqA&usqp=CAU'
        // time='2 days'
        // title='Badmashi Teaser | Elvish Yadav'
        // vidlink='https://www.youtube.com/watch?v=KQ5zW5pXQZk'
        // verified={true}
        /> */}
        <Video />
      </div>
      <Postinfo />
      <Posts />
      {/* <Counter /> */}
      <Newsletter />
      {/* ---->     This is the old method without map and spread operator */}

      {/* < Signin Email={Email} Field={Field} /> */}


      <Footer />
    </>
  )
}

export default App
