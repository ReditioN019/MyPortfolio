import Head from 'next/head';
import Navbar from '../1.navBar/Index';

//El children es la propiedad que me manda react cuando yo utilice el MainLayout como un componente que recibe otros componentes dentro.

export const MainLayout = ({ children }) => {
    return (
        <div >
            <Head>
                <title>Sebastián Rojo | Ingeniero de Software</title>
                <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
                <link rel="icon" href="/fav.png" />
            </Head>

            <Navbar />

            <main>
                { children }
            </main>
        </div>
    )
}

