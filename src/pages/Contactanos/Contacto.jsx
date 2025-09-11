import React from 'react'
import { Nav } from '../../assets/components/Nav'

export const Contacto = () => {
    return(
        <>
            <div className='sticky top-0 z-10'>
                <Nav/>
            </div>
            <div className='min-h-screen'>
                <div className='relative'>
                    <h1 className='absolute text-theme-old-green top-1/2 left-1/2'>Contactanos</h1>
                    <img src="/portada1.jpg" className='w-full h-screen object-cover' alt="" />
                </div>
            </div>
        </>
    )
}
