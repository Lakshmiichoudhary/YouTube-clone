import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../Utils/appSlice'
import { Link, useSearchParams } from 'react-router-dom'
import { youTube_Key2 } from '../../Utils/Constants'
import VideoCard from './VideoCard'
import Comment from './Comment'


const WatchVideo = () => {
  const dispatch = useDispatch()
  const [videos,setVideos] = useState([])
  const [searchParam] = useSearchParams()
  

  const getVideos = async () => {
    const data = await fetch(youTube_Key2)
    const json = await data.json()
    console.log(json)
    setVideos(json.items)
  }

  useEffect(()=>{
    getVideos()
  },[])

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
    <div>
      <div className="m-6 md:ml-24 rounded-lg border border-gray-900 md:flex">
      <div>
        <iframe 
        className="w-full h-56 md:w-[70rem] md:h-[30rem]"
        src={"https://www.youtube.com/embed/" + searchParam.get("v")} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        <div>
        <button className= 'bg-white py-2 px-2 md:py-4 md:px-10 font-bold mx-4 mt-4 rounded-full'>🔔 Subscribe</button>
        <button className='md:py-4 md:px-16 py-2 px-2 font-bold mt-4 mx-4 bg-slate-700 rounded-full'>➥ Share</button>
        <button className='bg-slate-700 md:py-4 md:px-16 py-2 px-2 font-bold rounded-full'>👍 Like </button>
        </div>
        <Comment />
      </div>
      <div className='h-50 ml:10 md:ml-20 '>
        {videos.map((video) =>
        <Link key={video.id} to={"/watch?v="+video.id}><VideoCard key={video.id} info={video} /></Link>)}
      </div>  
    </div>
    </div>
  )
}

export default WatchVideo
