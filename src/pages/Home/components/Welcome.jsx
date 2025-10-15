import React from 'react'
import { HeroWelcome } from './HeroWelcome'

export const Welcome = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <div>
            <div className=''>
                <HeroWelcome/>
            </div>
            <div className='mx-auto'>
                <h1 className={`text-5xl text-white ${isMobile ? '' : 'animation-show-left'} md:text-center md:justify-center mt-14 lg:mt-0 lg:text-center md:mt-90 lg:my-10 font-bold text-shadow-lg tracking-wide`}
                >
                    Bievenido a nuestra Institución
                </h1>
                <h5 className={`text-3xl text-center my-10 font-theme-chela font-bold ${isMobile ? '' : 'animation-show-left'} text-white`}>
                    En el liceo Berta Zamorano Lizana contamos con <br/>
                    <span className='text-theme-old-green-dark brightness-150'>
                        3 especializaciones y una formacion
                    </span>
                </h5>
                <p className={`text-3xl text-center my-10 font-theme-chela font-bold ${isMobile ? '' : 'animation-show-left'} text-white`}>
                    ¿Te interesaria conocerlas?
                </p>
                <div className='flex mx-auto justify-center'>
                    <a href="#especializaciones" name="Ir a Especializaciones" className={`${isMobile ? '' : 'animation-show-left'} p-5 font-bold 
                        bg-gradient-to-r from-theme-blue via-blue-700 to-blue-950 text-white rounded-lg`}>
                        Mas informacion
                    </a>
                </div>
            </div>
        </div>
    )
}
