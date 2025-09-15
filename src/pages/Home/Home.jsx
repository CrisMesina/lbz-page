
import { Footer } from '../../assets/components/Footer'
import { Nav } from '../../assets/components/Nav'
import { Carrousel } from './components/Carrousel'
import { Especializaciones } from './components/Especializaciones'
import { Recomendaciones } from './components/Recomendaciones'
import { Sellos } from './components/Sellos'

export const Home = () => {
    return(
        <>
            <div>
                <div className='sticky top-0 z-10 bg-white'>
                    <Nav/>
                </div>
                <div className='min-h-screen'>
                    <Carrousel/>
                </div>
                <div className='min-h-screen bg-gray-600'>
                    <Recomendaciones/>
                </div>
                <div className='min-h-screen'>
                    <Especializaciones/>
                </div>
                <div>
                    <Sellos/>
                </div>
                <div className='relative mt-20'>
                    <Footer/>
                </div>
            </div>
        </>
    )
}
