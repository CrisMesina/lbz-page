import React from 'react'
import { Nav } from '../../assets/components/Nav'
import { MisionyVision } from '../Nosotros/components/MisionyVision'
import { Directiva } from '../Nosotros/components/Directiva'
import { Cordinadores } from '../Nosotros/components/Cordinadores'
import { Ubicacion } from '../Nosotros/components/Ubicacion'

export const Nosotros = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                <Nav/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-6xl font-bold text-theme-old-green-dark top-1/2 left-1/20'>Nosotros</h1>
                    <p className='absolute text-6xl font-bold text-theme-old-green-light bottom-1/3 left-1/20'>Conocenos un poco mas</p>
                    <img src="/portada1.jpg" className='w-full h-screen object-cover' alt="" />
                </div>
            </div>
            <div className='mt-10 mb-20'>
                <MisionyVision/>
            </div>
            <div className='my-20'>
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
