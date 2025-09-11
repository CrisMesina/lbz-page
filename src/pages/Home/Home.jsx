
import { Nav } from '../../assets/components/Nav'
import { Carrousel } from './components/Carrousel'
import { Especializaciones } from './components/Especializaciones'
import { Recomendaciones } from './components/Recomendaciones'
import { Sellos } from './components/Sellos'

export const Home = () => {
    return(
        <>
            <div>
                <div className='sticky top-0 z-10'>
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
                <div className='min-h-screen'>
                    <Sellos/>
                </div>
            </div>
        </>
    )
}
