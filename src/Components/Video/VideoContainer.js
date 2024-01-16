import React, { useEffect, useState } from 'react'
import { youTube_Key } from '../../Utils/Constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import Shimmer from '../../Utils/Shimmer'

const VideoContainer = () => {
  const [videos,setVideos] = useState([])

  const getVideos = async () => {
    const data = await fetch(youTube_Key)
    const json = await data.json()
    setVideos(json.items)
  }

  useEffect(()=>{
    getVideos()
  },[])

  if(videos.length === 0){
    return <Shimmer/>
  }

  return (
    <div className='flex flex-wrap'>
      {videos.map((video) =>
      <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video} /> </Link>)}
    </div>
  )
}

export default VideoContainer
