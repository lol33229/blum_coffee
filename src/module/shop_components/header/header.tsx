import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

export default function ShopHeader({ }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div className='fon ' />
      {/* Стандартный header для ПК */}
      <div className="hidden md:flex p-4 items-center justify-between relative mb-[177px]">

        <Link to="/" className='ml-[52px] mr-[82px] ' >
          <img className='w-[300px] h-[67px]' src="/image/logo.png" alt="Логотип" />
        </Link>
          
    
        <div className="w-full flex items-center justify-between mr-[82px] relative font-bold">
          <div className='text-[#FFFFFF] text-[30px] leading-[36px] flex flex-col items-center'>
            <p className=''>ГРАФИК РАБОТЫ</p>
            <p className=''>ПН-ВС: 10:00-22:00</p>
          </div>

          <a className='mr-[82px] text-[#FFFFFF] text-[30px] leading-[36px] relative z-10' href="#2">
            ДОСТАВКА
          </a>
        
        
        <a className=' mr-[82px] text-[#FFFFFF] text-[30px] leading-[36px]' href="#why">КОНТАКТЫ</a>
        <Link to="/shop" className='text-[#FFFFFF] text-[30px] leading-[36px]'>МЕНЮ</Link>
        <Link to="/profile" className='text-[#FFFFFF] text-[30px] leading-[36px]'>
          <img src="/image/user.png" alt="Профиль" />
        </Link>
        </div>
      </div>


      {/* Мобильный header с бургер-меню */}
      <div className="flex md:hidden w-full p-4 items-center justify-between">
        <img src="/icons/logo.svg" alt="Логотип" />
        <button
          className="p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {/* Бургер-иконка */}
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>
    </header>
  );
}
