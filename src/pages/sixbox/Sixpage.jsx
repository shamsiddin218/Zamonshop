import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sixpage() {
  return (
    <div className=' max-w-[1200px] m-auto h-[400px] rounded-[18px] overflow-hidden mb-[24px]'>
      <NavLink to={'/air'}><img className=' w-full h-full object-cover transition-all duration-200 hover:scale-105' src='../public/images/bgimgair.jpg' alt="" /></NavLink>
      
    </div>
  )
}
