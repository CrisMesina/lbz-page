import { MisionyVision } from '../Nosotros/components/MisionyVision'
import { Directiva } from '../Nosotros/components/Directiva'
import { Cordinadores } from '../Nosotros/components/Cordinadores'
import { Ubicacion } from '../Nosotros/components/Ubicacion'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'
import { Hero } from './components/Hero'

export const Nosotros = () => {
    return( 
        <>
            <div className='sticky top-0 z-10'>
                {/*<Nav/>*/}
                <Navegador/>
            </div>
            <div className='min-h-screen'>
                <Hero/>
            </div>
            <div id='mision-vision'>
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
