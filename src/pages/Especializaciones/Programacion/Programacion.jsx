
import { Malla } from './components/Malla'
import { Navegador } from '../../../assets/components/Navegador'
export const Programacion = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    {/*<Nav/>*/}
                    <Navegador/>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2 text-white'>
                    <div className='w-full'>
                        <h1 className='text-3xl font-bold text-center mx-auto text-theme-old-green-dark mt-20'>Introduccion</h1>
                        <p className='text-start p-4 md:p-20 '>
                            La especialización en Programación del Liceo Berta Zamorano Lizana forma a los desarrolladores del futuro, brindando una educación técnica de vanguardia en el mundo de la tecnología y la informática. Esta modalidad está diseñada para estudiantes apasionados por la innovación digital y el desarrollo de soluciones tecnológicas.
                            <br/><br/>
                            Durante su formación, los estudiantes aprenden múltiples lenguajes de programación, desarrollo web, bases de datos y metodologías ágiles de desarrollo. Desarrollan competencias en soporte de usuario, fundamentos de redes y resolución de problemas técnicos, manteniéndose al día con las últimas tendencias tecnológicas.
                            <br/><br/>
                            Nuestros egresados están preparados para continuar estudios en carreras como Ingeniería en Informática, Desarrollo de Software, o para emprender proyectos tecnológicos propios. La industria digital ofrece infinitas oportunidades para quienes dominan estas competencias del siglo XXI.
                        </p>
                    </div>  
                    <div className='p-4'>
                        {/* COLOCAR UNA IMAGEN O UN CARROUSEL DE IMAGENES (PUEDEN SER LAS DE PUERTAS ABIERTAS) */}
                        <img src="/programacion-min.avif" className='mx-auto rounded-2xl hidden lg:block my-5' alt='Imagen representativa de nuestra especializacion en Programaicon, la foto fue tomada en un dia de puertas abiertas.'/>
                    </div>
                </div>

                <div className='min-h-screen p-5'>
                    <Malla/>
                </div>   
            </div>
        </>
    )
}
