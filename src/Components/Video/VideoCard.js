import React from 'react'

const VideoCard = ({info}) => {
    if (!info || !info.snippet) {
        return null; 
      }
    
    const {snippet,statistics} = info;
    const {thumbnails,title,channelTitle} = snippet; 
  return (
    <div className='text-white mx-2 w-96 h-auto mt-2 '>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.high.url} />
        <ul className='p-2'>
            <li className='font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
            
        </ul>
    </div>
  )
}

export default VideoCard
