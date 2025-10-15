

export const Hero = () => {

    const isMobile = window.innerWidth < 768;


    return(
        <>
            
            <div>
                <div className=" -z-10">
                    <img src="/hero1-min.avif" className={`w-full brightness-50 hidden md:block h-screen object-cover bg-green-700/30 rounded-2xl p-2 ${isMobile ? '' : 'clip-invert animation-show-left'}`} alt="" />
                    <div className={`w-full absolute  z-1 top-0 right-0 border-8 border-green-700/10 h-screen bg-[#249382] md:bg-green-700/30 ${isMobile ? '' : 'clip animation-show-right'}`}></div>

                </div>
                <div className='w-full flex' id="nosotros">
                    <div className='absolute top-130 right-150 w-32 h-32 bg-[#249382] rounded-full brightness-50 blur-xl'></div>
                    <div className='absolute top-1/2 right-10 w-32 h-32 bg-[#249382] rounded-full brightness-50 blur-xl'></div>
                    <div className='absolute top-20 right-90 w-32 h-32 bg-[#249382] rounded-full brightness-50 blur-xl'></div>

                    
                    <div className='absolute top-1/3 left-1/4 w-1/2 z-5 text-center text-white'>
                        <h1 className={`text-5xl font-bold mb-4 ${isMobile ? '' : 'animate-translateY'} `}>Sobre Nosotros</h1>
                        <p className={`text-lg ${isMobile ? '' : 'animate-translateY'}`}>Conoce más sobre nuestra misión, visión y valores que nos guían en cada paso que damos.</p>
                    </div>
                    
                </div>

                <a href="#mision-vision" name="Ir a Recomendaciones" className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='animate-bounce absolute bottom-0 z-10 left-175' width="80" height="80" viewBox="0 0 24 24" fill="#000000"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="white" d="M10.5 16.035L7.404 12.94a1.5 1.5 0 1 0-2.122 2.121l5.657 5.657a1.5 1.5 0 0 0 2.122 0l5.657-5.656a1.5 1.5 0 1 0-2.122-2.122L13.5 16.035V4.5a1.5 1.5 0 0 0-3 0v11.535Z"/></g></svg>
                </a>

            </div>
        </>
    )
}
