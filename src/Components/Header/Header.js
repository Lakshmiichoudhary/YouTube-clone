import React, { useEffect, useState } from 'react'
import menu from '../../assets/menu1.png'
import logo from '../../assets/logo.png'
import profil from '../../assets/profil.png'
import search from '../../assets/search.png'
import { useDispatch } from 'react-redux'
import { menuToggle } from '../../Utils/appSlice'
import { youTube_SEARCH_API } from '../../Utils/Constants'

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestion,setSearchSuggestions] = useState([]);
    const [showSuggestions,setShowSuggestiond] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
      const timer = setTimeout(()=>
        getSearchResult(),
      200)
      
      return () =>{
        clearTimeout(timer)
      } 
        
    }, [searchQuery]);

      const getSearchResult = async () => {
        const data = await fetch(youTube_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1])
      };
    

    const menuHandler = () => {
        dispatch(menuToggle())
    }


  return (
    <div className='grid grid-flow-col '>
        <div className='flex col-span-1 p-3 '>
            <img className='h-20 cursor-pointer' onClick={menuHandler} src={menu} alt="menu" />
            <img  className="h-20" src={logo} alt="logo"/>
        </div>
        <div className='p-2 col-span-10 '>
          <div className=' m-4  text-center flex'>
            <input className='p-2 ml-20 w-2/4 border border-blue-900 rounded-l-full
            text-white text-2xl font-bold bg-black '
            type='text' 
            placeholder='search'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestiond(true)}
            onBlur={() => setShowSuggestiond(false)}
            />
            <button className='p-3 border border-gray-500 rounded-r-full bg-slate-600 '>
              <img className='w-10' src={search} alt='search' />
            </button>
          </div>
            {showSuggestions && (<div className='text-white absolute ml-32 bg-slate-800 px-5 w-[37rem] rounded-lg 
            shadow-xl '>    
              <ul className='m-2 font-bold text-2xl '>
              {searchSuggestion.map((suggestions) =>(
                <li key={suggestions} className='flex my-2  hover:bg-slate-700 '>
                  <img className="w-10 mr-1" src={search} alt='search'/>
                  {suggestions}
                </li>
              ))}
              </ul>
            </div>)}
        </div>
        <div className='p-3 m-3 col-span-1'>
            <img className='h-12' src={profil} alt='profil'/>
        </div>
      
    </div>
  )
}

export default Header
