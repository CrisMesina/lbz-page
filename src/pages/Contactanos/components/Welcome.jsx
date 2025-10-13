import React from 'react'
import { HeroWelcome } from './HeroWelcome'

export const Welcome = () => {
    return (
        <div>
            <div className=''>
                <HeroWelcome/>
            </div>
            <div className=''>
                <h1 className='text-5xl text-white animation-show-left md:text-center md:justify-center mt-14 lg:mt-0 lg:text-center md:mt-90 lg:my-10 font-bold text-shadow-lg tracking-wide'
                >
                    ¿Interesado en trabajar o estudiar con nosotros?
                </h1>
                <h5 className='text-3xl text-center my-10 font-theme-chela font-bold animation-show-left text-theme-old-green-dark brightness-150'>
                    Contactanos
                </h5>

                <div className='flex mx-auto justify-center'>
                    <a href="#especializaciones" name="Ir a Especializaciones" className='animation-show-left p-5 font-bold 
                        bg-gradient-to-r from-theme-blue via-blue-700 to-blue-950 text-white rounded-lg'>
                        Mas informacion
                    </a>
                </div>
            </div>
        </div>
    )
}
