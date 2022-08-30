import Image from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { TasksApp } from '../../../public/assets/projects';

const netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={TasksApp}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Tasks APP</h2>
          <h3>Fullstack Javascript</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Proyecto</p>
          <h2>Descripción General</h2>
          <p className="mb-2">
            En esta aplicación se visualiza una tabla que contiene una lista de tareas, donde cada una tiene una descripción, una fecha de creación y una de expiración. Cada fila de tareas está asociada a un color, el cual se designa dependiendo de cuan próxima se encuentra su fecha de vencimiento. Las tareas de color verde son tareas que aún hay tiempo para su vencimiento, las tareas de color amarillo están próximas a vencer, las tareas de color rojo vencen hoy y las tareas de color gris están expiradas.
          </p>
          <p className="mb-5">
            Esta aplicación es un CRUD, ya que se puede, agregar tareas, modificarlas, marcar como completas y eliminar varias a la vez. Además posee un boton para filtrar tareas según elección.
          </p>

          <a
            href='https://github.com/ReditioN019/P01_fullstack_todoapp.client'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Frontend Code</button>
          </a>

          <a
            href='https://github.com/ReditioN019/P01_fullstack_todoapp.server'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Backend Code</button>
          </a>


          <a
            href='https://srojo-task-app.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Demo</button>
          </a>




        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl bg-slate-300  py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologías</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Typescript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ReactJS - Redux Toolkit
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> NodeJS - NestJS (Express)
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Material UI
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Axios
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Docker
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeORM
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PostgreSQL
              </p>
            </div>
          </div>
        </div>



        <Link href='/proyectos'>
          <p className='text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 cursor-pointer'>Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
