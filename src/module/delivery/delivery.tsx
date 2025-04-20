import { useState } from 'react';

type Props = {}

export default function Delivery({ }: Props) {
  
  

  return (
    <div className="w-full mt-10 px-4 ">
        <div className='devkrug'/>
        <div className='devkrug2'/>
        <div className='flex justify-between items-center relative'>
            <div className='mt-0 items-center relative' >
                <img className=''src="/image/market.png" alt="" />
                <img className='mt-[110px] ml-[60px]' src="/image/eda.png" alt="" />
            </div>
            <div>
                <img src="/image/del.png" alt="" className='w-[960px] relative'/>
                <div className='flex flex-col items-center justify-center text-center mt-0'>
                    <p className="text-[#FD744C] font-bold text-[60px] leading-tight">
                        Заказывай тот самый вкус
                    </p>
                    <p className="text-[#FD744C] font-bold text-[60px] leading-tight">
                        в привычных приложениях!
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}
