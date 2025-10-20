
//import { FondoCirculos } from '../../Home/components/FondoCirculos'

export const HeroWelcome = () => {

    const isMobile = window.innerWidth < 768;

    return (
        <>
            <div className=''>
                <svg
                className="absolute top-0 right-0 h-full 2xl:w-250 lg:w-230 -z-1 animation-show-right"
                viewBox="0 0 1000 562"
                preserveAspectRatio="none"
                style={{ pointerEvents: 'none' }}
            >
                <polygon
                    points="350,0 1000,0 1000,562 0,562"
                    fill="#249382"
                />
                </svg>
                <img src="/alumnos.avif" className='absolute hidden lg:block right-0 bottom-0 xl:h-150 2xl:h-210 z-0 animation-show-right' alt="" />
               <div className="absolute left-10 top-1/2 w-32 h-32 bg-[#249382] rounded-full blur-2xl"></div>
               <div className="absolute left-100 top-20 w-32 h-32 bg-[#249382] rounded-full blur-2xl"></div>
                <div className="absolute left-120 top-120 w-32 h-32 bg-[#249382] rounded-full blur-2xl"></div>
                <a href="/contactanos" name="Contactanos" className={`absolute top-5 right-5 p-3 bg-gradient-to-r from-green-900 to-green-600 text-white font-bold 
                    rounded-lg z-10 hover:bg-gradient-to-r hover:from-green-700 hover:to-green-800 transition-colors ${isMobile ? '' : 'animation-show-right duration-300'}`}>
                    Contactanos
                </a>
            </div>
        </>
    )
}
