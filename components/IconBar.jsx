import React from 'react';
import Remote from '../public/assets/remote.png';
import Mic from '../public/assets/mic.png';
import Headphones from '../public/assets/headphones.png';
import Trophy from '../public/assets/trophy.png';
import Paint from '../public/assets/paint.png';
import Image from 'next/image';

const IconBar = () => {
  return (
    <div className='p-2 md:p-8'>
      {/* Container */}
      <div className='grid sm:grid-cols-3 lg:grid-cols-5 gap-4 border-t border-gray-700 py-8'>
        {/* Grid Item */}
        <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
          <p className='text-1xl font-bold'>Steam</p>
          <Image src={Remote} width='85' height='50' alt='/' />
        </div>
        {/* Grid Item */}
        <a href='https://valoacc.neocities.org/'>
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className='text-1xl font-bold'>Valorent Accounts</p>
            <Image src={Mic} width='50' height='50' alt='/' />
          </div>
        </a>

        {/* Grid Item */}
        <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
          <p className='text-1xl font-bold'>Fortnite Accounts</p>
          <Image src={Headphones} width='50' height='50' alt='/' />
        </div>
        {/* Grid Item */}
        <a href='https://mrbeast-three.vercel.app/'>

        <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
          <p className='text-1xl font-bold'>MrBeast Gift Cards</p>
          <Image src={Trophy} width='50' height='50' alt='/' />
        </div>
        </a>
        {/* Grid Item */}
        <a href='https://pubguc.vercel.app/'>
          <div className='w-full h-[50px] bg-[#9147ff] flex justify-between items-center px-4 rounded'>
            <p className='text-1xl font-bold'>PUBG Accounts</p>
            <Image src={Paint} width='50' height='35' alt='/' />
          </div>
        </a>
      </div>
    </div>
  );
};

export default IconBar;
