import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Childskeleton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDark(darkMode);
  }, []);

  const baseColor = isDark ? '#2e2e2e' : '#e0e0e0';
  const highlightColor = isDark ? '#444' : '#f5f5f5';

  const renderSkeletonCard = () => (
    <article className='w-[230px]'>
      <article className='w-[230px] h-[309px] mb-[10px]'>
        <Skeleton height={309} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
      <article className='w-[220px] h-[30px] mb-[10px]'>
        <Skeleton height={30} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
      <article className='w-[101px] h-[16px] mb-[10px]'>
        <Skeleton height={16} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
      <article className='w-[220px] h-[16px] mb-[10px]'>
        <Skeleton height={16} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
      <article className='w-[220px] h-[16px] mb-[10px]'>
        <Skeleton height={16} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
      <article className='w-[220px] h-[30px]'>
        <Skeleton height={30} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
    </article>
  );

  return (
    <div className='mb-7'>
      <div className='max-w-[1200px] m-auto mb-[15px]'>
        <article className='w-[250px] h-[48px]'>
          <Skeleton height={28} baseColor={baseColor} highlightColor={highlightColor} />
        </article>
      </div>
      <div className='max-w-[1200px] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {renderSkeletonCard()}
        {renderSkeletonCard()}
        {renderSkeletonCard()}
        {renderSkeletonCard()}
      </div>
    </div>
  )
}
