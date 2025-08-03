import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sixpage() {
  return (
    <div className='max-w-[1200px] m-auto rounded-[18px] overflow-hidden mb-[24px] 
  h-[300px] lv:h-[180px] xs:h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] '>

  <NavLink to={'/air'}>
    <img 
      src='/images/bgimgair.jpg' 
      alt='air'
      className=' h-full  transition-all duration-200 hover:scale-105' 
    />
  </NavLink>

</div>

  )
}
