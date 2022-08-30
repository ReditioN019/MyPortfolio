import { GiffApp, MiniApp, TasksApp } from '../../public/assets/projects';
import ProjectItem from './ProjectItem';

const Projects = () => {
    return (
        <div className='w-full py-16 md:container md:mx-auto lg:max-w-[70%] xl:max-w-[60%]'>
            <div className='mx-10 py-2 xl:mx-auto'>
                <h2 className='pt-10 pb-5 text-center md:text-start'>Proyectos</h2>
                <div className='grid sm:grid-cols-2 xl:grid-cols-3  gap-8 py-2'>
                    <ProjectItem
                        title='Gifs App'
                        backgroundImg={GiffApp}
                        projectUrl='/proyectos/proyecto1'
                        tech='React JS'
                    />
                    <ProjectItem
                        title='Mini App'
                        backgroundImg={MiniApp}
                        projectUrl='/proyectos/proyecto2'
                        tech='React JS'
                    />
                     <ProjectItem
                        title='Tasks App'
                        backgroundImg={TasksApp}
                        projectUrl='/proyectos/proyecto3'
                        tech='Fullstack Javascript'
                    />
                    {/*
                    <ProjectItem
                        title='Twitch UI'
                        backgroundImg={twitchImg}
                        projectUrl='/proyectos/proyecto4'
                        tech='Next JS'
                    /> */}
                </div>
            </div>
        </div>
    );
};

export default Projects;
