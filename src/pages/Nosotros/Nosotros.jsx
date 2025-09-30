import React from 'react'
import { Nav } from '../../assets/components/Nav'
import { MisionyVision } from '../Nosotros/components/MisionyVision'
import { Directiva } from '../Nosotros/components/Directiva'
import { Cordinadores } from '../Nosotros/components/Cordinadores'
import { Ubicacion } from '../Nosotros/components/Ubicacion'
import { Footer } from '../../assets/components/Footer'

export const Nosotros = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                <Nav/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-6xl font-bold text-theme-old-green-dark top-1/2 left-1/20 drop-shadow-title-text'>Nosotros</h1>
                    <p className='absolute text-6xl font-bold text-theme-old-green-light bottom-1/3 left-1/20 drop-shadow-title-text'>Conocenos un poco mas</p>
                    <img src="/hero3-min.JPG" className='w-full h-screen object-cover' alt="Portada de la seccion Nosotros." />
                </div>
            </div>
            <div>
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
