import { Link } from 'react-router-dom';

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full flex flex-row justify-between mb-[50px] pr-[75px] ">
      {/* Логотип и иконки соцсетей */}
      <div className="flex flex-col ml-0 md:ml-[60px]">
        <img src="/image/logo2.png" alt="Логотип" className="w-[266px] pb-[55px]" />
        <div className="flex flex-row gap-12">
          <img src="/image/tg.png" alt="Telegram" />
          <img src="/image/tt.png" alt="TikTok" />
          <img src="/image/inst.png" alt="Instagram" />
        </div>
      </div>

      {/* Время работы */}
      <div className="flex flex-col font-bold mt-[45px] text-[#B8B8B8] text-[35px] items-center">
        <p>Ждём вас у нас</p>
        <p>с 10 до 22</p>
      </div>

      {/* Навигация */}
      <div className="flex flex-col justify-between gap-2 font-bold text-[#B8B8B8] text-[35px] text-right">
        <Link to="/">Главная</Link>
        <Link to="/shop">Меню</Link>
        <p>Доставка</p>
      </div>

      {/* Контакты (выравнивание по правому краю) */}
      <div className="flex flex-col justify-between gap-2 font-bold text-[#B8B8B8] text-[35px] text-right">
        <p>Сайт франшизы</p>
        <p>8 (905) 231 38 55</p>
        <p>Разработчики блум</p>
      </div>
    </div>
  );
}