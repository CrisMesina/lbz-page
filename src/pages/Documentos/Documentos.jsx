
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
            <div className='h-screen'>
                <div className=''>
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
