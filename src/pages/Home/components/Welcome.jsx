import React from 'react'
import { HeroWelcome } from './HeroWelcome'

export const Welcome = () => {
    return (
        <div>
            <HeroWelcome/>

            <div className='mx-auto'>
                <div className=''>
                    <div className='absolute w-70 h-70 rounded-full bg-[#249382] brightness-30 top-20 blur-sm '></div>
                    <div className='absolute w-50 h-50 rounded-full bg-[#249382] brightness-30 bottom-1/9 left-1/5 blur-sm '></div>
                        
                    <svg
                        className="absolute top-0 right-0 h-full w-300 z-0 animation-right-to-left"
                        viewBox="0 0 1000 562"
                        preserveAspectRatio="none"
                        style={{ pointerEvents: 'none' }}
                    >
                    <polygon
                        points="350,0 1000,0 1000,562 0,562"
                        fill="#249382"
                    />
                    </svg>
                </div>
                <h1 className='text-5xl dark:text-white animation-show-left md:text-center md:justify-center mt-14 lg:text-center md:mt-90 lg:my-10 font-bold  text-theme-old-green-dark text-shadow-lg tracking-wide'
                >
                    Bievenido a nuestra Institución
                </h1>
                <h5 className='text-3xl text-center my-10 font-theme-chela font-bold animation-show-left dark:text-white text-theme-old-green-light'>
                    En el liceo Berta Zamorano Lizana contamos con <br/>
                    <span className='text-theme-old-green-dark brightness-150'>
                        3 especializaciones y una formacion
                    </span>
                </h5>
                <p className='text-3xl text-center my-10 font-theme-chela font-bold animation-show-left dark:text-white text-theme-old-green-light'>
                    ¿Te interesaria conocerlas?
                </p>
                <div className='flex mx-auto justify-center'>
                    <a href="#especializaciones" name="Ir a Especializaciones" className='animation-show-left p-5 font-bold 
                        bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light 
                        dark:from-theme-blue dark:via-blue-700 dark:to-blue-950 text-white rounded-lg'>
                        Mas informacion
                    </a>
                </div>
            </div>
        </div>
    )
}
