import Image from 'next/image';
import React from 'react';
import {GiffAppFondo} from '../../../public/assets/projects'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const proyecto1 = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={GiffAppFondo}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Buscador de Gifs</h2>
          <h3>React JS / Context / Tailwind</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <h2>Visión General</h2>
          <p className="mb-5">
            Los usuarios pueden busar los gifs que quieran ingresando el tema en el input. Esto devolverá una 
            serie de gifs asociados al tema escogido. Los gifs se pueden descargar y copiar a portapapeles para
            ser compartidos si asi el usuario lo requeire.
          </p>
          <a
            href='https://github.com/ReditioN019/Gifs-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Code</button>
          </a>
          <a
            href='https://srojo-app1.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 bg-slate-300 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2 text-gray-600 '>Tecnologías</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Context
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Reducer
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Fetch
              </p>
            </div>
          </div>
        </div>
        <Link href='/proyectos'>
          <p className='text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default proyecto1;
