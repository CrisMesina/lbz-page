import { MisionyVision } from '../Nosotros/components/MisionyVision'
import { Directiva } from '../Nosotros/components/Directiva'
import { Cordinadores } from '../Nosotros/components/Cordinadores'
import { Ubicacion } from '../Nosotros/components/Ubicacion'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'

export const Nosotros = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                {/*<Nav/>*/}
                <Navegador/>
            </div>
            <div className='min-h-screen'>
                <img src="/hero3-min.avif" className='object-cover brightness-50  h-screen w-full' alt="" />
                <div className='absolute left-1/10 top-1/3 p-8'>
                    <h1 className='text-3xl font-theme-caveat dark:text-white drop-shadow-title-text animation-show-left text-center my-10 font-bold  text-theme-old-green-dark text-shadow-lg tracking-wide'
                    >
                        ¿Estas interesado en quienes son trabajan con nosotros?
                    </h1>
                    <h5 className='text-6xl font-theme-chela font-bold animation-show-left dark:text-white text-theme-old-green-light drop-shadow-title-text'>Conocenos</h5>
                    <p className='text-3xl font-theme-chela my-10 font-bold animation-show-left dark:text-white text-theme-old-green-light drop-shadow-title-text'>Aqui encontraras lo que buscas</p>
                </div>
            </div>
            <div>
                <MisionyVision/>
            </div>
            <div className='my-20'>
                <Directiva/>
            </div>
            <div className='p-4'>
                <Cordinadores/>
            </div>
            <div>
                <Ubicacion/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
