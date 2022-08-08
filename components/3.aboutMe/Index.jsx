import Image from 'next/image';
import AboutImg from '../../public/assets/about.jpg';
import Skill from './Skill';
import { Tailwind, Javascript, jQuery, ReactImg, Bootstrap, Git, Node, Next, Sql, Net, Typescript } from '../../public/assets/skills'
import MenuContact from '../utils/MenuContact';


const About = () => {

    return (
        <div className='w-full py-16 md:container md:mx-auto lg:max-w-[70%] xl:max-w-[60%]'>
            <div className='mx-10  xl:mx-auto'>
                <div className='mt-6 py-2 text-white text-justify md:max-w-[80%]'>
                    <h2 className='pt-10 pb-5 text-center md:text-start'>Acerca de mí</h2>
                    <p>Hola, soy Ingeniero de Software Jr. muy responsable, motivado por aprender y enfocado en el constante autodesarrollo profesional y personal.</p>
                    <p>Perfeccionista y detallista en mi trabajo, orientado a entregar excelentes resultados.</p>
                    <p>Soy una persona autodidacta que está en constante actualización de tecnologías emergentes y en el perfeccionamiento de las que ya conozco.</p> 

                    <div className='max-w-[100%] md:max-w-[70%]'>
                        <h3 className='text-xl font-bold my-5'>Habilidades</h3>
                        <div className='grid grid-cols-3   sm:grid-cols-5    lg:grid-cols-6 gap-1   '>
                            <Skill logo={Javascript} text={"Javascript"} />
                            <Skill logo={jQuery} text={"jQuery"} />
                            <Skill logo={ReactImg} text={"React"} />
                            <Skill logo={Typescript} text={"Typescript"} />
                            <Skill logo={Next} text={"Next"} />
                            <Skill logo={Node} text={"NodeJS"} />
                            <Skill logo={Bootstrap} text={"Bootstrap"} />
                            <Skill logo={Tailwind} text={"Tailwind"} />
                            <Skill logo={Git} text={"Git"} />
                            <Skill logo={Sql} text={"SQL"} />
                            <Skill logo={Net} text={".NET 6"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
