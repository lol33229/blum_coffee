import { useState } from 'react';

type Props = {}

export default function Location({ }: Props) {
  return (
    <div className='w-full max-w-[1440px] mx-auto px-4 py-8'>

    <div className='oval1'/>
    <div className='oval2'/>

      {/* Текстовый блок */}
      <div className='mb-8'>
        <p className='text-2xl font-bold text-center mb-2 text-[#7EDAFF] text-[50px] mt-[115px]'>Удобное расположение в центре Екатеринбурга в</p>
        <p className='text-2xl font-bold text-center text-[#7EDAFF] text-[50px]'>вашем любимом торговом центре Гринвич!</p>
      </div>

      {/* Адрес */}
      <p className='text-xl text-center mt-[25px] mb-12 text-[#FD744C] text-[40px]'>ул. 8 марта, 46; 3 этаж; фуд-маркет Estory</p>

      {/* Галерея изображений */}
      <div className='w-full flex items-center justify-between relative'>
        <img src="/image/moti.png" alt="" className='moti relative m-0'/>
        <img src="/image/map.png" alt="" className='ml-[315px]'/>
        <img src="/image/cotik.png" alt="" className='kotik relative m-0'/>
      </div>
    </div>
  );
}