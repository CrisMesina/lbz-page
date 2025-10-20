
export const Hero = () => {

    const isMobile = window.innerWidth < 768;


    return(
        <>
            
            <div>
                <header
                    id="nosotros"
                    className="hero relative overflow-hidden text-[#eaf5ff] z-1 h-screen flex items-center"
                >
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl top-0 left-100 -z-1'></div>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl bottom-0 left-200'></div>
                    <div className='absolute w-70 h-70 bg-[#249382] rounded-full brightness-70 blur-xl right-0 '></div>
                    <img src="/hero1-min.avif" className={`absolute ${isMobile ? 'clip-horizontal h-screen object-cover' : 'clip w-full'} animation-popup `} alt="" />
                    <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
                        <h1 className={`text-5xl leading-tight font-bold mb-4 ${!isMobile ? 'animate-translateY' : ''}`}>
                            Sobre Nosotros
                        </h1>
                        <p className={`${!isMobile ? 'animate-translateY' : ''} text-[clamp(.95rem,1.2vw,1.15rem)] opacity-90`}>
                            Conoce más sobre nuestra misión, visión y valores que nos guían en cada paso que damos.
                        </p>
                        <a href="#mision-vision" className="inline-block mt-6 bg-[#eaf5ff] text-[#071828] px-4 py-2 rounded-md font-semibold">
                            Ir a Misión y Visión
                        </a>
                    </div>
                </header>

                <a href="#mision-vision" name="Ir a Recomendaciones" className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='animate-bounce absolute bottom-0 z-10 left-175' width="80" height="80" viewBox="0 0 24 24" fill="#000000"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="white" d="M10.5 16.035L7.404 12.94a1.5 1.5 0 1 0-2.122 2.121l5.657 5.657a1.5 1.5 0 0 0 2.122 0l5.657-5.656a1.5 1.5 0 1 0-2.122-2.122L13.5 16.035V4.5a1.5 1.5 0 0 0-3 0v11.535Z"/></g></svg>
                </a>

            </div>
        </>
    )
}