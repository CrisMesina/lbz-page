
import { Nav } from '../../assets/components/Nav'
import { Contactos } from './components/Contactos'


export const Contacto = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                <Nav/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-6xl font-bold text-theme-old-green-dark top-1/2 left-1/20'>Contacta con nosotros</h1>
                    <p className='absolute text-6xl font-bold text-theme-old-green-light bottom-1/3 left-1/20'></p>
                    <img src="/portada1.jpg" className='w-full h-screen object-cover' alt="" />
                </div>
            </div>
            <div>
                <Contactos/>
            </div>
            <div className='min-h-screen'>

            </div>
        </>
    )
}
