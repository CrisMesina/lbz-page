
import { Listado } from './components/Listado'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'
import { Welcome } from './components/Welcome'

export const Documentos = () => {
    return (
        <>
            <div className='sticky top-0 z-10'>
                <Navegador/>
            </div>
            <div className='h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                <div className='md:mx-10 w-full my-10 md:my-20 lg:my-50 xs:my-0 text-center px-20'>
                    <Welcome/>
                </div>
            </div>
            <div className='min-h-screen text-white'>
                <Listado/>
            </div>
            <div>
                <Footer/>
            </div>
        </>
    )
}
