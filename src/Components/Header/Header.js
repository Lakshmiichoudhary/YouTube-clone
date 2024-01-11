import React from 'react'
import menu from '../../assets/menu1.png'
import logo from '../../assets/logo.png'
import profil from '../../assets/profil.png'
import { useDispatch } from 'react-redux'
import { menuToggle } from '../../Utils/appSlice'

const Header = () => {
    const dispatch = useDispatch()

    const menuHandler = () => {
        dispatch(menuToggle())
    }

  return (
    <div className='grid grid-flow-col '>
        <div className='flex col-span-1 p-3 '>
            <img className='h-20 cursor-pointer' onClick={menuHandler} src={menu} alt="menu" />
            <img  className="h-20" src={logo} alt="logo"/>
        </div>
        <div className='p-2 col-span-8 m-4 text-center'>
            <input className='p-3 w-2/3 border border-gray-500 rounded-l-full font-bold' 
            type='text' placeholder='search'/>
            <button className='p-3 border border-gray-500 rounded-r-full'>🔎</button>
        </div>
        <div className='p-3 m-3 col-span-1'>
            <img className='h-12' src={profil} alt='profil'/>
        </div>
      
    </div>
  )
}

export default Header
