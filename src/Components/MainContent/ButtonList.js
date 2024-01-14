import React from 'react'
import Button from './Button'

const ButtonList = () => {

    const buttontype = [
        "All","Music","Game","Mixes","Lo-fi","IndianPopMusic","Comedy",
        "Fashion","Blogs","New to You","Travel","reactJs","DSA","Play"
    ]
    
  return (
    <div className='overflow-hidden flex '>
        {buttontype.map((button,index)=>(
        <Button key={index} name={button} />))} 
    </div>
  )
}

export default ButtonList
