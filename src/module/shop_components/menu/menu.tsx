import { useState } from 'react';

type Props = {}

export default function Menu({ }: Props) {
  
  

  return (
    <div className="w-full">
        <p className='text-2xl font-bold text-center mb-2 text-[#FD744C] text-[43px]'>Меню</p>
        <div>
            <p>Панкейки, тающие во рту — легкие, как утренний</p>
            <p> ветерок, с хрустящей корочкой и воздушные внутри.</p>
        </div>

        <div>
            <p>Японские панкейки</p>
            
        </div>
    </div>
  );
}