import MenuContact from '../utils/MenuContact';


const Main = () => {
    return (
        <div className='w-full h-screen '>
            <div className='max-w-[70%] w-full h-full mx-auto p-2 flex justify-start items-center'>
                <div className="text-center sm:text-start">
                    <p className='text-lg tracking-widest text-[#CCD6F6] '>
                        Hola, mi nombre es
                    </p>
                    <h1 className='py-4 text-4xl  lg:text-7xl text-[#64ffda]'>Sebastián Rojo </h1>
                    <h2 className='py-2 text-xl  md:text-3xl lg:text-4xl text-[#38B6FF]'>Ingeniero de Software</h2>
                    <p  className='py-4 text-xs  md:text-sm lg:text-xl text-white sm:max-w-[70%]'>
                        He aprendido a crear aplicaciones web frontend responsivas y ahora estoy enfocandome en dominar el backend.
                    </p>
                    
                    <MenuContact />

                </div>
                   
            </div>
        </div>
    );
};

export default Main;
