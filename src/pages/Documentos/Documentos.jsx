
import { Nav } from '../../assets/components/Nav'
import { Listado } from './components/Listado'
import { Footer } from '../../assets/components/Footer'

export const Documentos = () => {
    return (
        <>
            <div className='sticky top-0 z-10'>
                <Nav/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-6xl font-bold text-theme-old-green-dark top-1/2 left-1/20 drop-shadow-title-text'>Documentos importantes</h1>
                    <p className='absolute text-6xl font-bold text-theme-old-green-light bottom-1/3 left-1/20'></p>
                    <img src="/hero3-min.JPG" className='object-cover h-screen w-full' alt="" />
                </div>
            </div>
            <div className='min-h-screen'>
                <Listado/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
