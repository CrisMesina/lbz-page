
import { Footer } from '../../assets/components/Footer'
import { Contactos } from './components/Contactos'
import { Navegador } from '../../assets/components/Navegador'


export const Contacto = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                {/*<Nav/>*/}
                <Navegador/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-6xl animation-show-left font-bold bg-gradient-to-r bg-theme-verde-savia via-theme-old-green-nav to-theme-old-green-medium
                bg-clip-text text-transparent drop-shadow-title-text top-1/2 left-1/20 '>Contacta con nosotros</h1>
                    <p className='absolute text-6xl animation-show-left font-bold text-theme-old-green-light bottom-1/3 left-1/20'></p>
                    <img src="/hero2-min.JPG" className='w-full h-screen object-cover' alt="Portada para el apartado de Contacta con nosotros." />
                </div>
            </div>
            <div>
                <Contactos/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
