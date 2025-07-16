import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function HomeSkeleton() {
  return (
    <>
    <div className=' w-full mb-[15px]'>
    <div className=' max-w-[1200px] m-auto flex justify-between items-center'>
      <article className=' w-[79px] h-[28px]'> 
        <Skeleton height={28} highlightColor='white'  />        
      </article>   
      <article className=' flex gap-3'>
        <article className=' w-[75px]'><Skeleton highlightColor='white'/></article>
        <article className=' w-[75px]'><Skeleton highlightColor='white'/></article>
        <article className=' w-[75px]'><Skeleton highlightColor='white'/></article>
        <article className=' w-[75px]'><Skeleton highlightColor='white'/></article>
        <article className=' w-[75px]'><Skeleton highlightColor='white'/></article>        
      </article>
      <article className=' w-[20px]'>
        <Skeleton highlightColor='white'/>
      </article>   
    </div>
    </div>
    <div className=' max-w-[1200px] m-auto flex justify-between items-center mb-[15px]'>
      <article className=' w-[160px] h-[33px]'><Skeleton height={30} highlightColor='white'/></article>
      <article className=' w-[109px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
      <article className=' w-[337px] h-[37px]'><Skeleton height={37} highlightColor='white'/></article>
      <article className=' w-[104px] h-[24px]'><Skeleton height={24} highlightColor='white'/></article>
      <article className=' w-[104px] h-[24px]'><Skeleton height={24} highlightColor='white'/></article>
      <article className=' w-[104px] h-[24px]'><Skeleton height={24} highlightColor='white'/></article>
    </div>
    <div className=' max-w-[1200px] m-auto flex justify-start gap-4 items-center mb-[34px]'>
      <article className=' w-[95px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
      <article className=' w-[95px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
      <article className=' w-[95px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
      <article className=' w-[95px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
      <article className=' w-[95px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
      <article className=' w-[95px] h-[36px]'><Skeleton height={36} highlightColor='white'/></article>
    </div>
    <div className=' max-w-[1200px] m-auto h-[400px] mb-[30px]'>
      <Skeleton height={400} borderRadius={20} highlightColor='white'/>
    </div>
    <div className=' max-w-[1200px] m-auto mb-[15x]'>
      <article className='w-[250px] h-[48px]'><Skeleton height={28} highlightColor='white'/></article>
    </div>
    <div className=' max-w-[1200px] m-auto grid grid-cols-4'>
      <article className=' w-[230]'>
        <article className=' w-[230px] h-[309px] mb-[10px]'><Skeleton height={309} highlightColor='white'/></article>
        <article className='w-[220px] h-[30px] mb-[10px]'><Skeleton height={30} highlightColor='white'/></article>
        <article className=' w-[101px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[30px]'><Skeleton height={30} highlightColor='white'/></article>
      </article>
      <article className=' w-[230]'>
        <article className=' w-[230px] h-[309px] mb-[10px]'><Skeleton height={309} highlightColor='white'/></article>
        <article className='w-[220px] h-[30px] mb-[10px]'><Skeleton height={30} highlightColor='white'/></article>
        <article className=' w-[101px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[30px]'><Skeleton height={30} highlightColor='white'/></article>
      </article>
      <article className=' w-[230]'>
        <article className=' w-[230px] h-[309px] mb-[10px]'><Skeleton height={309} highlightColor='white'/></article>
        <article className='w-[220px] h-[30px] mb-[10px]'><Skeleton height={30} highlightColor='white'/></article>
        <article className=' w-[101px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[30px]'><Skeleton height={30} highlightColor='white'/></article>
      </article>
      <article className=' w-[230]'>
        <article className=' w-[230px] h-[309px] mb-[10px]'><Skeleton height={309} highlightColor='white'/></article>
        <article className='w-[220px] h-[30px] mb-[10px]'><Skeleton height={30} highlightColor='white'/></article>
        <article className=' w-[101px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[16px] mb-[10px]'><Skeleton height={16} highlightColor='white'/></article>
        <article className=' w-[220px] h-[30px]'><Skeleton height={30} highlightColor='white'/></article>
      </article>
    </div>
    </>
  )
}
