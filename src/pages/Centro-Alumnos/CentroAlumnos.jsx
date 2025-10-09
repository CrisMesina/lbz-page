
import { Alumnos } from './components/Alumnos'
import { Footer } from '../../assets/components/Footer'
import { Navegador } from '../../assets/components/Navegador'
import { Welcome } from './components/Welcome'

export const CentroAlumnos = () => {
    return(
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    <Navegador/>
                </div>
                <div className='h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='md:mx-10 w-full my-10 md:my-20 lg:my-50 xs:my-0 text-center px-20'>
                        <Welcome/>
                    </div>
                    <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                        <a href="#conocerpadres" name="Ir a Recomendaciones" className='cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='animate-bounce' width="100" height="100" viewBox="0 0 24 24" fill="#000000"><g fill="none"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="white" d="M10.5 16.035L7.404 12.94a1.5 1.5 0 1 0-2.122 2.121l5.657 5.657a1.5 1.5 0 0 0 2.122 0l5.657-5.656a1.5 1.5 0 1 0-2.122-2.122L13.5 16.035V4.5a1.5 1.5 0 0 0-3 0v11.535Z"/></g></svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div className='p-5 mx-auto'>
                        <h1 className='text-4xl text-center font-bold p-3 text-black dark:text-white' id='conocerpadres'>Conoce a nuestro Centro de Alumnos</h1>
                        <p className='p-35 text-xl text-start justify-between text-black dark:text-white'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis quisquam, commodi aliquam amet nihil delectus harum provident autem esse quaerat similique reprehenderit eligendi ullam possimus asperiores quis doloribus quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis quisquam, commodi aliquam amet nihil delectus harum provident autem esse quaerat similique reprehenderit eligendi ullam possimus asperiores quis doloribus quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis quisquam, commodi aliquam amet nihil delectus harum provident autem esse quaerat similique reprehenderit eligendi ullam possimus asperiores quis doloribus quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis quisquam, commodi aliquam amet nihil delectus harum provident autem esse quaerat similique reprehenderit eligendi ullam possimus asperiores quis doloribus quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum debitis quisquam, commodi aliquam amet nihil delectus harum provident autem esse quaerat similique reprehenderit eligendi ullam possimus asperiores quis doloribus quos.

                        </p>
                    </div>
                </div>
                <div className='min-h-screen'>
                    <Alumnos/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

