import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineClose} from 'react-icons/ai';
import NavLogo from '../../public/assets/navLogo.jpeg' //logo de navbar
import { ActiveLink } from './ActiveLink';
import MenuContact from '../utils/MenuContact';


const MenuResponsivo = ({ nav, setNav }) => {

    return (
        //si se presiona menu hamburgesa nav = true, entonces muestra el primer estilo. Si se cierra menu hamburguesa, no muestra nada
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''} >
            <div
                className={
                    nav  // El true es el estilo de la caja que se abre con menu hamburguesa
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[55%] h-screen bg-[#0a192f] p-10 ease-in duration-500'
                        : 'fixed left-[-200%] top-0 p-10 ease-in duration-500' //cuando se cierra  el menu hamburgesa
                }
            >
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Link href='/'>
                            <a>
                                <Image
                                    src={NavLogo}
                                    width='87'
                                    height='55'
                                    alt='/'
                                />
                            </a>
                        </Link>
                        <div
                            onClick={() => setNav(!nav)}
                            className='rounded-full shadow-md shadow-gray-500 p-3 bg-slate-300 text-black '
                        >
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>
                            
                        </p>
                    </div>
                </div>
                <div className='py-4 flex flex-col'>
                    <ul className='font-bold'>
                        <li onClick={() => setNav(false)} className='py-4'>
                            <ActiveLink text="Inicio" href='/' />
                        </li>
                        <li onClick={() => setNav(false)} className='py-4'>
                            <ActiveLink text="Sobre mí" href='/about' />
                        </li>
                        <li onClick={() => setNav(false)} className='py-4'>
                            <ActiveLink text="Proyectos" href='/proyectos' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default MenuResponsivo;