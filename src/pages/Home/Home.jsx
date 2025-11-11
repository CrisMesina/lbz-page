
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'
import { Especializaciones } from './components/Especializaciones'
import { Recomendaciones } from './components/Recomendaciones'
import { Sellos } from './components/Sellos'
import { Welcome } from './components/Welcome'
import { ListadoMuestra } from './components/ListadoDocumentosMuestra'

export const Home = () => {
    return(
        <>
            <div>
                <div className='sticky top-0 z-10 bg-white'>
                    {/*<Nav/>*/}
                    <Navegador/>
                </div>
                <div className='h-screen'>
                    <div className=''>
                        <Welcome/>
                    </div>
                </div>
                <div className='min-h-screen bg-theme-blue'>
                    <Recomendaciones/>
                </div>
                <div className='min-h-screen' id='especializaciones'>
                    <Especializaciones/>
                </div>
                <div>
                    <Sellos/>
                </div>
                <div className=''>
                    <ListadoMuestra/>
                    <div className='text-center my-10 '>
                        <button className='text-white p-5 rounded-lg bg-gradient-to-r from-blue-950 to-blue-900/30 hover:translate-y-2 shadow-md shadow-amber-50'>
                            <a href='/documentos'>Ver más</a>
                        </button>
                    </div>
                </div>
                <div className='relative mt-20'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
