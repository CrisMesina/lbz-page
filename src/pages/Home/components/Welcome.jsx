
export const Welcome = () => {

    const isMobile = window.innerWidth < 768;


    return(
        <>
            
            <div>
                <header
                    id="nosotros"
                    className="hero relative overflow-hidden text-[#eaf5ff] z-1 h-screen flex items-center"
                >
                    <a href="/contactanos" name="Contactanos" className='absolute top-5 right-5 p-3 bg-gradient-to-r from-green-900 to-green-600 text-white font-bold 
                        rounded-lg z-10 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-800 transition-colors animation-show-right duration-300'>
                        ¡Contáctanos Ya!
                    </a>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl top-0 left-100 -z-1'></div>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl bottom-0 left-200'></div>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl right-0 '></div>
                    <img src="/portadaIndex2.avif" className={`absolute ${isMobile ? 'clip-horizontal h-screen object-cover' : 'clip w-full'} animation-popup `} alt="Imagen de portada del Liceo Berta Zamorano Lizana" />
                    <div className='absolute inset-0 bg-gradient-to-b from-theme-blue-bg/80 via-transparent to-theme-blue-bg'></div>
                    <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
                        <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl'>
                            Berta Zamorano Lizana
                        </h1>
                        <p className='text-xl md:text-2xl text-theme-celeste-claro mb-8 font-light max-w-3xl mx-auto'>
                            ¡Bienvenidos al Liceo Berta Zamorano Lizana! Donde la excelencia académica y el desarrollo integral de nuestros estudiantes son nuestra prioridad.
                        </p>
                        <div className='flex flex-col md:flex-row gap-4 justify-center items-center'>
                            <a href='#recomendaciones'>
                                <button name="conoce-mas" className='bg-gradient-to-r from-[#249382] to-theme-old-green-light hover:from-theme-old-green-light hover:to-[#249382] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-[#249382]/50 transition-all duration-300 hover:scale-105'>
                                    Conoce más
                                </button>
                            </a>
                            <a href='#especializaciones'>
                                <button name="ver-especializaciones" className='border-2 border-[#249382] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#249382]/20 transition-all duration-300 hover:scale-105'>
                                    Ver Especializaciones
                                </button>
                            </a>
                        </div>
                    </div>
                </header>

            </div>
        </>
    )
}