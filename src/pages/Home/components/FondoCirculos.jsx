import React from 'react'

export const FondoCirculos = () => {
    return (
        <>
            {/* PRIMEROS DERECHA, DONDE ESTA LA IMAGEN */}

            <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl top-1/2 right-[30%] -z-1'></div>
            <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl right-0 bottom-0'></div>
            <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl right-70 top-0 '></div>

            {/* CIRCULO EN MEDIO >:) */}


            {/* DOS ULTIMOS IZQUIERDA, DONDE ESTA EL TEXTO */}
            <div className='absolute w-50 h-50 bg-[#249382] rounded-full brightness-70 blur-xl left-1/4 -z-2'></div>
            <div className='absolute w-50 h-50 bg-[#249382] rounded-full brightness-70 blur-xl top-0'></div>
            <div className='absolute w-50 h-50 bg-[#249382] rounded-full brightness-70 blur-xl bottom-20 '></div>
        </>
    )
}
