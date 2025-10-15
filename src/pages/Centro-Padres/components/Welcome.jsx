import React from 'react'
import { HeroWelcome } from './HeroWelcome'

export const Welcome = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <div>
            <div className=''>
                <HeroWelcome/>
            </div>
            <div className=''>
                <h1 className={`text-5xl dark:text-white ${isMobile ? '' : 'animation-show-left'} mt-50 lg:mt-0 lg:text-center md:mt-90 lg:my-10 font-bold  text-theme-old-green-dark text-shadow-lg`}
                >
                    Conoce a nuestro centro de padres
                </h1>
                <div className='flex mx-auto justify-center'>
                    <a href="#padres" name="Ir a Padres" className={` ${isMobile ? '' : 'animation-show-left'} mt-20 lg:mt-0 p-5 font-bold 
                        bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light 
                        dark:from-theme-blue dark:via-blue-700 dark:to-blue-950 text-white rounded-lg`}>
                        Mas informacion
                    </a>
                </div>
            </div>
        </div>
    )
}
