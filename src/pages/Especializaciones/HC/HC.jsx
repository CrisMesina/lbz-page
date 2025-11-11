
import { Malla } from './components/Malla'
import { Navegador } from '../../../assets/components/Navegador'
import { Hero } from './components/Hero'
import { Introduccion } from './components/Introduccion'

export const HC = () => {
    return (
        <>
            <div className='min-h-screen bg-gradient-to-b from-theme-blue-bg via-theme-blue to-theme-blue-bg'>
                <div className='sticky top-0 z-10'>
                    {/*<Nav/>*/}
                    <Navegador/>
                </div>


                <div className='relative h-screen flex items-center justify-center overflow-hidden'>
                    <div className='absolute w-96 h-96 bg-[#249382] rounded-full brightness-70 blur-3xl -top-20 -left-20 opacity-30 animate-pulse'></div>
                    <div className='absolute w-80 h-80 bg-theme-old-green-medium rounded-full brightness-70 blur-3xl bottom-10 right-10 opacity-20'></div>
                    
                    <div className='absolute inset-0 z-0'>
                        <img 
                            src="/src/imgs/img-hc.avif" 
                            className='w-full h-full object-cover opacity-20' 
                            alt="Científico Humanista"
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-theme-blue-bg/80 via-transparent to-theme-blue-bg'></div>
                    </div>


                    <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
                        <Hero/>
                    </div>

                </div>

                <div id='introduccion' className='min-h-screen flex items-center py-20'>
                    <Introduccion/>
                </div>


                <div id='malla' className='min-h-screen p-5 py-20'>
                    <div className='text-center mb-16'>
                        <h2 className='text-5xl font-bold text-white mb-4'>Malla Curricular</h2>
                        <div className='h-1 w-32 bg-gradient-to-r from-[#249382] to-theme-old-green-light rounded-full mx-auto'></div>
                    </div>
                    <Malla/>
                </div>   
            </div>
        </>
    )
}
