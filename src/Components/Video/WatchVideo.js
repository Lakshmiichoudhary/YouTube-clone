import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../Utils/appSlice'
import { useSearchParams } from 'react-router-dom'
import { youTube_Key } from '../../Utils/Constants'
import VideoCard from './VideoCard'
import Comment from './Comment'


const WatchVideo = () => {
  const dispatch = useDispatch()
  const [videos,setVideos] = useState([])
  const [searchParam] = useSearchParams()
  

  const getVideos = async () => {
    const data = await fetch(youTube_Key)
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
      <div className="m-6 ml-24 rounded-lg border border-gray-900 flex">
      <div>
        <iframe 
        width="1100" 
        height="550" 
        src={"https://www.youtube.com/embed/" + searchParam.get("v")} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        <div>
        <button className= 'bg-white py-4 px-10 font-bold mx-4 mt-4 rounded-full'>Subscribe</button>
        <button className='py-4 px-16 font-bold mt-4 mx-4 bg-slate-700 rounded-full'>Share</button>
        <button className='bg-slate-700 py-4 px-16 font-bold rounded-full'>share</button>
        </div>
        <Comment />
      </div>
      <div className='h-50 ml-20 '>
        {videos.map((video) =>
        <VideoCard key={video.id} info={video} />)}
      </div>  
    </div>
    </div>
  )
}

export default WatchVideo
