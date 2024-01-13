import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='text-white font-bold hover:bg-white hover:text-black bg-slate-800 
        px-5 py-3 m-3 rounded-lg'>
            {name}
        </button>
    </div>
  )
}

export default Button
