import { MisionyVision } from '../Nosotros/components/MisionyVision'
import { Directiva } from '../Nosotros/components/Directiva'
import { Coordinadores } from '../Nosotros/components/Coordinadores'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'
import { Hero } from './components/Hero'
import { Convenios } from '../Home/components/Convenios'

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
                <Coordinadores/>
            </div>
            <div className='mb-20'>
                <Convenios/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
