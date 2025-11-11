
export const Hero = () => {

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
                        Contactanos
                    </a>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl top-0 left-100 -z-1'></div>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl bottom-0 left-200'></div>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl right-0 '></div>
                    <img src="/portadaIndex.avif" className={`absolute ${isMobile ? 'clip-horizontal h-screen object-cover' : 'clip w-full'} animation-popup `} alt="" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
                        <h1 className={`text-5xl leading-tight font-bold mb-4 ${!isMobile ? 'animate-translateY' : ''}`}>
                            Sobre Nosotros
                        </h1>
                        <p className={`${!isMobile ? 'animate-translateY' : ''} text-[clamp(.95rem,1.2vw,1.15rem)] opacity-90`}>
                            Conoce más sobre nuestra misión, visión y valores que nos guían en cada paso que damos.
                        </p>
                    </div>
                </header>
            </div>
        </>
    )
}