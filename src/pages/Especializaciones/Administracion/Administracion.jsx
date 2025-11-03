
import { Malla } from './components/Malla'
import { Navegador } from '../../../assets/components/Navegador'

export const Administracion = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    {/*<Nav/>*/}
                    <Navegador/>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2 text-white'>
                    <div className='w-full'>
                        <h1 className='text-3xl font-bold text-center mx-auto text-theme-old-green-dark my-10'>Introduccion</h1>
                        <p className='text-start p-4 md:p-20'>
                            La especialización en Administración del Liceo Berta Zamorano Lizana forma futuros líderes empresariales con una sólida base en gestión, finanzas y emprendimiento. Esta modalidad está diseñada para estudiantes con visión de negocios que desean comprender el funcionamiento del mundo empresarial desde una perspectiva práctica y actualizada.
                            <br/><br/>
                            Durante su formación, los estudiantes desarrollan competencias en contabilidad, marketing, recursos humanos, gestión de proyectos y análisis financiero. Aprenden a tomar decisiones estratégicas, liderar equipos de trabajo y identificar oportunidades de negocio en un mercado cada vez más competitivo y globalizado.
                            <br/><br/>
                            Nuestros egresados están preparados para continuar estudios superiores en carreras como Administración de Empresas, Contabilidad, Ingeniería Comercial, Marketing, o para emprender sus propios proyectos empresariales con las herramientas y conocimientos necesarios para el éxito.
                        </p>
                    </div>  
                    <div className='p-4'>
                        {/* COLOCAR UNA IMAGEN O UN CARROUSEL DE IMAGENES (PUEDEN SER LAS DE PUERTAS ABIERTAS) */}
                        <img src="/programacion.avif" className='mx-auto rounded-2xl my-5 hidden lg:block ' />
                    </div>
                </div>

                <div className='min-h-screen p-5'>
                    <Malla/>
                </div>   

                <div>
                    <iframe 
                        className='w-full h-96 lg:h-screen p-10' 
                        src="https://www.youtube.com/embed/-RV-KUR9xzk?si=QBdOVb7yMO2YE0Eb&amp;start=1" 
                        title="Video sobre la formacion Cientifico Humanista" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    >
                    </iframe>
                </div>             
                
            </div>
        </>
    )
}
