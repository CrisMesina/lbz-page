import React from 'react'

export const Hero = () => {
    return (
        <>
            <div className='relative'>
                <h1 className='absolute text-6xl font-bold bg-gradient-to-r bg-theme-verde-savia via-theme-old-green-nav to-theme-old-green-medium
                bg-clip-text text-transparent drop-shadow-title-text top-1/2 left-1/20'>Centro de Padres</h1>
                <p className='absolute text-6xl font-bold text-theme-old-green-light bottom-1/3 left-1/20'></p>
                <img src="/src/imgs/hero2-min.JPG" className='object-cover' alt="Portada para el apartado del Centro de Padres" />
            </div>
            
        </>
    )
}
