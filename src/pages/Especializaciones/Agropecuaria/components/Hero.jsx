import React from 'react'

export const Hero = () => {
    return (
        <>
            <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl'>
                Agropecuaria
            </h1>
            <p className='text-xl md:text-2xl text-theme-celeste-claro mb-8 font-light max-w-3xl mx-auto'>
                Liderando el futuro del sector agroalimentario con tecnología y sustentabilidad
            </p>
            <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                <a href='#introduccion'>
                    <button name="info-agro" className='bg-gradient-to-r from-[#249382] to-theme-old-green-light hover:from-theme-old-green-light hover:to-[#249382] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-[#249382]/50 transition-all duration-300 hover:scale-105'>
                        Conoce más
                    </button>
                </a>
                <a href='#malla'>
                    <button name="malla-agro" className='border-2 border-[#249382] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#249382]/20 transition-all duration-300 hover:scale-105'>
                        Ver Malla Curricular
                    </button>
                </a>
            </div>            
        </>
    )
}
