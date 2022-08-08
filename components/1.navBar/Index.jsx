import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu as Hamburguesa } from 'react-icons/ai';
import NavLogo from '../../public/assets/navLogo.png' //logo de navbar
import MenuResponsivo from './MenuResponsivo'; //Componente menu responsivo 
import { ActiveLink } from './ActiveLink';

const Navbar = () => {
    /*  nav se encarga de dar estilos según tipo dispositivo: desktop o hamburgesa
        nav por defecto está falso. Cuando presiono icono hamburgesa, lo combio a true
        Cada vez que hago un setNav(false), significa que voy a ocultar la barra laterar del menú hamburguesa
    */const [nav, setNav] = useState(false);
    
    //shadow es la sombra que se ve en la parte inferior del navbar una vez desplazado hacia abajo 
    const [shadow, setShadow] = useState(false);

    useEffect(() => {
        //Si se hace un scrollY, establecemos sombra, sino, no
        const handleShadow = () => (window.scrollY) ? setShadow(true) : setShadow(false);
        
        window.addEventListener('scroll', handleShadow);
    }, []);


    return (
        <div
            style={{ backgroundColor: '#0a192f'}} //Estilo para la barra cuando doy scroll
            className={
                shadow
                    ? 'fixed w-full h-20 shadow-lg shadow-blue-900 z-[100] ease-in-out duration-500 '
                    : 'fixed w-full h-20 z-[100]' 
            }
        >
            <div className='flex justify-between mx-10 sm:mx-20 lg:mx-40 pt-6 items-center h-full'>
                <Link href='/'>
                    <a>
                        <Image
                            src={NavLogo}
                            alt='/'
                            width={80}
                            height={50}
                            className='cursor-pointer'
                        />
                    </a>
                </Link>

                <nav>
                    <ul className='hidden md:flex font-bold ' > {/*ocultar siempre que sea inferior a md */}
                        <li className='ml-10  hover:text-[#38B6FF]'>
                            <ActiveLink text="Inicio" href='/' />
                        </li>
                        <li className='ml-10 hover:text-[#38B6FF]'>
                            <ActiveLink text="Sobre mí" href='/about' />
                        </li>
                        <li className='ml-10 hover:text-[#38B6FF]'>
                            <ActiveLink text="Proyectos" href='/proyectos' />
                        </li>
                    </ul>


                    {/* Icóno hamburguesa */}
                    <div
                        onClick={() => setNav(!nav)}
                        className='md:hidden'
                    >
                        <Hamburguesa size={30} />
                    </div>
                </nav>
            </div>


            <MenuResponsivo
                nav={nav}
                setNav={setNav}
            />

        </div>
    );
};

export default Navbar;
