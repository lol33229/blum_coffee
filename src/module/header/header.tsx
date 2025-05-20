import { useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

export default function Header({ }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <div className='krug2 ' />
      <div className='krug' />
      {/* Стандартный header для ПК */}
      <div className="hidden md:flex w-full p-4 items-center justify-between relative">
        
        <img src="/image/logo.png" alt="Логотип" />
          
    
        <div className="w-full flex items-center justify-between ml-[61px] relative">
          <a className='text-[#FFFFFF] font-normal text-[30px] leading-[36px]' href="#about">
            Время работы
          </a>

          <a className='text-[#FFFFFF] font-normal text-[30px] leading-[36px] relative z-10' href="#2">
            ДОСТАВКА
          </a>
        
        
        <a className='text-[#FFFFFF] font-normal text-[30px] leading-[36px]' href="#why">Контакты</a>
        <Link to="/shop" className='text-[#FFFFFF] font-normal text-[30px] leading-[36px]'>Меню</Link>
        <Link to="/profile" className='text-[#FFFFFF] font-normal text-[30px] leading-[36px]'>
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

      {/* Выпадающее мобильное меню */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col p-4 bg-white shadow-lg">
          <a className="text-[#FFFFFF] font-normal text-[20px] leading-[24px] mb-2" href="#about">О нас</a>
          <a className="text-[#FFFFFF] font-normal text-[20px] leading-[24px] mb-2" href="#2">Новости</a>
          <a className="text-[#FFFFFF] font-normal text-[20px] leading-[24px] mb-2" href="#3">Преимущества</a>
          <a className="text-[#FFFFFF] font-normal text-[20px] leading-[24px] mb-2" href="#why">Почему мы</a>
          <a className="text-[#1E4DC2] font-normal text-[20px] leading-[24px]" href="#contact">Связь с нами</a>
        </nav>
      )}
    </header>
  );
}
