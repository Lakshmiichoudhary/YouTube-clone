import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../Utils/appSlice'
import { useSearchParams } from 'react-router-dom'

const WatchVideo = () => {
  const dispatch = useDispatch()
  const [searchParam] = useSearchParams()

  useEffect(()=>{
    dispatch(closeMenu())
  },[])

  return (
    <div className="m-6 ml-24 rounded-xl border border-gray-900">
      <iframe 
      width="1100" 
      height="550" 
      src={"https://www.youtube.com/embed/" + searchParam.get("v")} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>
    </div>
  )
}

export default WatchVideo