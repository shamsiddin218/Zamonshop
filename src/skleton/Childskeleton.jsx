import React from 'react'
import Skeleton from 'react-loading-skeleton'

export default function Childskeleton() {
  return (
    <div className=' mb-7'>
      <div className=' max-w-[1200px] m-auto mb-[15px]'>
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
    </div>
  )
}
