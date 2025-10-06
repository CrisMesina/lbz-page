
import { Hero } from './components/Hero'
import { Alumnos } from './components/Alumnos'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'

export const CentroAlumnos = () => {
    return(
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    <Navegador/>
                </div>
                <div className='min-h-screen'>
                   <Hero/>
                </div>
                <div className='min-h-screen text-white'>
                    <h1 className='p-5 text-4xl font-bold text-center'>Ultimas Publicaciones</h1>
                </div>
                <div className='min-h-screen'>
                    <Alumnos/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

