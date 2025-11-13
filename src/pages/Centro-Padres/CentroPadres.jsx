import { Navegador } from '../../assets/components/Navegador'
import { Padres } from './components/Padres'
import { Footer } from '../../assets/components/Footer'
import { Welcome } from './components/Welcome'

export const CentroPadres = () => {

    const img = "" // Colocar ubicación de la imagen

    return(
        <>
            <div className='min-h-screen text-white'>
                <div className='sticky top-0 z-10'>
                    <Navegador/>
                </div>
                <div className='h-screen grid'>
                    <div className=''>
                        <Welcome/>
                    </div>
                </div>
                <div>
                    <div className='p-5 mx-auto grid-cols-1 grid md:grid-cols-2'>
                        <div>
                            <h1 className='text-4xl text-center font-bold p-3 text-white' id='conocerpadres'>Conoce a nuestro Centro de Padres</h1>
                            <p className='p-2 lg:p-20 text-lg text-start justify-between text-white'>
                                El Centro de Padres y Apoderados del Liceo Berta Zamorano Lizana es una organización fundamental que fortalece la comunicación entre la familia y la institución educativa. Trabajamos de manera colaborativa para apoyar el desarrollo integral de nuestros estudiantes, organizando actividades que fomentan la participación activa de las familias en el proceso educativo.
                                <br/><br/>
                                Nuestro centro se dedica a crear espacios de encuentro, promover la integración de la comunidad educativa y contribuir al mejoramiento de la infraestructura y recursos del liceo. A través de reuniones, talleres y eventos especiales, buscamos mantener informados a los padres sobre el progreso académico y las oportunidades de crecimiento de sus hijos.
                                <br/><br/>
                                Invitamos a todas las familias a participar activamente en nuestras iniciativas, porque creemos firmemente que la educación es una responsabilidad compartida entre el hogar y la escuela.
                            </p>
                        </div>
                        <div className='flex mt-20 md:mt-0'>
                            <img src={`${img.length < 2 ? '/default-profile.avif' : img}`} className='w-70 md:w-96 lg:w-120 mx-auto my-auto rounded-lg shadow-xl  shadow-amber-50 -skew-2 hover:skew-2 transition-all duration-300' alt="Imagen representativa del Centro de Padres" />
                        </div>
                    </div>
                </div>
                <div className='mt-5' id='padres'>
                    <Padres/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

