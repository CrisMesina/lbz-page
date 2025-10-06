import React from 'react'

export const Welcome = () => {
    return (
        <div>
            <div
            className="absolute inset-0 z-0 brightness-70"
            style={{
                background: '#060D47',
                clipPath: "polygon(0 0, 100% 0, 100% 80%, 72% 100%, 28% 100%, 0 80%)"
            }}
            />
            <div className='mx-auto'>
                <div className='absolute hidden md:block md:w-140 inset-0 z-0 h-32 w-1/2 mx-auto my-10 bg-gradient-to-r from-green-700 to-green-900 brightness-70 rounded-xl text-white'>
                    <div className='grid grid-cols-3 my-13'>
                        <p className='mx-auto my-auto w-full h-full font-bold text-xl border-r'>Respeto</p>
                        <p className='mx-auto my-auto w-full h-full font-bold text-xl border-r'>Responsabilidad</p>
                        <p className='mx-auto my-auto w-full h-full font-bold text-xl'>Perseverancia</p>
                    </div>
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
                <a href="#especializaciones" className='absolute animation-show-left p-5 font-bold 
                    bg-gradient-to-r from-theme-old-green-medium via-theme-old-green-dark to-theme-old-green-light 
                    dark:from-theme-blue dark:via-blue-700 dark:to-blue-950 text-white rounded-lg left-1/3 md:left-90 lg:left-86'>
                    Mas informacion
                </a>
            </div>
        </div>
    )
}
