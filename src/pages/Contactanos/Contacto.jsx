import React from 'react'
import { Nav } from '../../assets/components/Nav'
import { MisionyVision } from './components/MisionyVision'
import { Directiva } from './components/Directiva'
import { Cordinadores } from './components/Cordinadores'
import { Ubicacion } from './components/Ubicacion'

export const Contacto = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                <Nav/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-6xl font-bold text-theme-old-green-light top-1/2 left-1/20'>Contactanos</h1>
                    <img src="/portada1.jpg" className='w-full h-screen object-cover' alt="" />
                </div>
            </div>
            <div className='my-20'>
                <MisionyVision/>
            </div>
            <div className='min-h-screen'>
                <Directiva/>
            </div>
            <div className='min-h-screen'>
                <Cordinadores/>
            </div>
            <div>
                <Ubicacion/>
            </div>
        </>
    )
}
