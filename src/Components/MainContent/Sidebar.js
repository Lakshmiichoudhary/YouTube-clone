import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuTriger = useSelector((store) => store.app.isMenuTriger)

  return !isMenuTriger ? null : (
    <div className='text-white m-4 p-2 space-y-28 font-bold'>
      <div>
        <h1>home</h1>
      </div>
      <div>
        <h1>Shots</h1>
      </div>
      <div>
        <h1>Subscriptions</h1>
      </div>
      <div>
        <h1>You</h1>
      </div>
    </div>
  )
}

export default Sidebar
