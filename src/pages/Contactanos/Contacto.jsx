
import { Footer } from '../../assets/components/Footer'
import { Contactos } from './components/Contactos'
import { Navegador } from '../../assets/components/Navegador'
import { Welcome } from './components/Welcome'
import { Ubicacion } from '../Nosotros/components/Ubicacion'


export const Contacto = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                {/*<Nav/>*/}
                <Navegador/>
            </div>
            <div className='h-screen'>
                <div className=''>
                    <Welcome/>
                </div>
            </div>
            <div>
                <Contactos/>
            </div>
            <div className='mb-10'>
                <Ubicacion/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
