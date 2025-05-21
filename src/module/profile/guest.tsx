import { useState } from 'react';
import axios from 'axios';


type Props = {}

export default function Guest({ }: Props) {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone_number: phoneNumber
    };

    try {
      const response = await axios.post('http://localhost/api/contact-forms/', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-full '>
        <p className='text-[#39C6FF] text-[75px] font-bold mb-[45px]'>Профиль</p>

         <div>
         <form onSubmit={handleSubmit} className="flex flex-col font-bold mt-[45px] text-[#FFFFFF] text-[35px] grid-cols-2 grid gap-x-[444px]">
            <input
              type="text"
              className='w-[451px] h-[58px] rounded-[20px] py-[21px] px-[20px] bg-[#A5A5A5]'
              placeholder='имя'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              className='w-[451px] h-[58px] rounded-[20px] py-[21px] px-[20px] bg-[#A5A5A5] '
              placeholder='фамилию'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              className='w-[451px] h-[58px] rounded-[20px] py-[21px] px-[20px] bg-[#A5A5A5] mt-[62px]'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              className='w-[451px] h-[58px] rounded-[20px] py-[21px] px-[20px] bg-[#A5A5A5] mt-[62px]'
              placeholder='номер телефона'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </form>
        </div>

    </div>
  );
}