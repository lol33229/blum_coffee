import { useState } from 'react';

type Props = {}

export default function Location({ }: Props) {
  

  return (
    <div className='w-full'>
        <div>
            <p>Удобное расположение в центре Екатеринбурга в</p>
            <p>вашем любимом торговом центре Гринвич!</p>
        </div>

        <p>ул. 8 марта, 46; 3 этаж; фуд-маркет Estory</p>

        <div className='w-full flex items-center justify-between relative '>
            <img src="/image/moti.png" alt="" className=''/>
            <img src="/image/map.png" alt="" className=''/>
            <img src="image/cotik.png" alt="" className=''/>
        </div>
    </div>
  );
}