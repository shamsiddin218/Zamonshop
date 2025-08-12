import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function HomeSkeleton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDark(darkMode);
  }, []);

  const baseColor = isDark ? '#2e2e2e' : '#e0e0e0';
  const highlightColor = isDark ? '#444' : '#f5f5f5';

  const renderProductCard = () => (
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
    <>
  {/* Birinchi qator */}
  <div className="w-full mb-[15px]">
    <div className="max-w-[1200px] m-auto flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3">
      <article className="w-[79px] h-[28px]">
        <Skeleton height={28} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
      <article className="flex flex-wrap xs:flex-nowrap gap-3 justify-center">
        {[...Array(5)].map((_, i) => (
          <article key={i} className="w-[75px]">
            <Skeleton baseColor={baseColor} highlightColor={highlightColor} />
          </article>
        ))}
      </article>
      <article className="w-[20px] hidden xs:block">
        <Skeleton baseColor={baseColor} highlightColor={highlightColor} />
      </article>
    </div>
  </div>

  {/* Ikkinchi qator */}
  <div className="max-w-[1200px] m-auto flex flex-col xs:flex-row xs:justify-between xs:items-center gap-3 mb-[15px]">
    <article className="w-[160px] h-[33px]">
      <Skeleton height={30} baseColor={baseColor} highlightColor={highlightColor} />
    </article>
    <article className="w-[109px] h-[36px]">
      <Skeleton height={36} baseColor={baseColor} highlightColor={highlightColor} />
    </article>
    <article className="w-full xs:w-[337px] h-[37px]">
      <Skeleton height={37} baseColor={baseColor} highlightColor={highlightColor} />
    </article>
    <div className="flex flex-wrap gap-3">
      {[...Array(3)].map((_, i) => (
        <article key={i} className="w-[104px] h-[24px]">
          <Skeleton height={24} baseColor={baseColor} highlightColor={highlightColor} />
        </article>
      ))}
    </div>
  </div>

  {/* Uchunchi qator */}
  <div className="max-w-[1200px] m-auto flex flex-wrap xs:flex-nowrap justify-start gap-4 items-center mb-[34px]">
    {[...Array(6)].map((_, i) => (
      <article key={i} className="w-[95px] h-[36px]">
        <Skeleton height={36} baseColor={baseColor} highlightColor={highlightColor} />
      </article>
    ))}
  </div>

  {/* Asosiy rasm */}
  <div className="max-w-[1200px] m-auto h-[250px] xs:h-[400px] mb-[30px]">
    <Skeleton height={"100%"} borderRadius={20} baseColor={baseColor} highlightColor={highlightColor} />
  </div>

  {/* Sarlavha */}
  <div className="max-w-[1200px] m-auto mb-[15px]">
    <article className="w-[180px] xs:w-[250px] h-[48px]">
      <Skeleton height={28} baseColor={baseColor} highlightColor={highlightColor} />
    </article>
  </div>

  {/* Mahsulotlar grid */}
  <div className="max-w-[1200px] m-auto grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4">
    {renderProductCard()}
    {renderProductCard()}
    {renderProductCard()}
    {renderProductCard()}
  </div>
</>

  )
}
