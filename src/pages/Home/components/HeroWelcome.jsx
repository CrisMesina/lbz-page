import React from 'react'
import { FondoCirculos } from './FondoCirculos'

export const HeroWelcome = () => {
    return (
        <>
            <div className=''>
                <svg
                className="absolute top-0 right-0 h-full w-310 z-0 animation-right-to-left"
                viewBox="0 0 1000 562"
                preserveAspectRatio="none"
                style={{ pointerEvents: 'none' }}
            >
                <polygon
                    points="350,0 1000,0 1000,562 0,562"
                    fill="#249382"
                />
                </svg>
                <img src="/hero-welcome.png" className='absolute right-0 bottom-0 h-210 z-5 animation-right-to-left' alt="" />
                <FondoCirculos/>
            </div>
        </>
    )
}
