import React from 'react'
import { FondoCirculos } from './FondoCirculos'

export const HeroWelcome = () => {
    return (
        <>
            <div className=''>
                <svg
                className="absolute top-0 right-0 h-full w-310 z-0 animation-show-right"
                viewBox="0 0 1000 562"
                preserveAspectRatio="none"
                style={{ pointerEvents: 'none' }}
            >
                <polygon
                    points="350,0 1000,0 1000,562 0,562"
                    fill="#249382"
                />
                </svg>
                <img src="/hero-welcome.png" className='absolute right-0 bottom-0 h-210 z-5 animation-show-right' alt="" />
                <FondoCirculos/>
                <a href="/contactanos" name="Contactanos" className='absolute top-5 right-5 p-3 bg-gradient-to-r from-green-900 to-green-600 text-white font-bold 
                    rounded-lg z-10 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-800 transition-colors animation-show-right duration-300'>
                    Contactanos
                </a>
            </div>
        </>
    )
}
