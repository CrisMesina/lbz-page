
import { Malla } from './components/Malla'
import { Navegador } from '../../../assets/components/Navegador'

export const HC = () => {
    return (
        <>
            <div className='min-h-screen'>
                <div className='sticky top-0 z-10'>
                    {/*<Nav/>*/}
                    <Navegador/>
                </div>

                <div>
                    
                </div>

                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-2 text-white'>
                    <div className='w-full'>
                        <h1 className='text-3xl font-bold text-center mx-auto text-theme-old-green-dark my-10'>Introduccion</h1>
                        <p className='text-start p-2 lg:p-20 '>
                            La formación Científico Humanista en el Liceo Berta Zamorano Lizana está diseñada para estudiantes que buscan una educación integral y equilibrada, preparándolos para enfrentar los desafíos del mundo universitario y profesional. Esta modalidad combina de manera armoniosa las ciencias exactas con las humanidades, desarrollando tanto el pensamiento lógico-matemático como las habilidades comunicativas y de análisis crítico.
                            <br/><br/>
                            Nuestros estudiantes de HC exploran áreas como matemáticas, física, química, biología, lenguaje, historia, filosofía e idiomas extranjeros, construyendo una base sólida de conocimientos que les permite acceder a cualquier carrera universitaria. El enfoque pedagógico promueve la investigación, el debate académico y el desarrollo de competencias transversales esenciales para el siglo XXI.
                            <br/><br/>
                            Con esta formación, nuestros egresados están preparados para destacar en carreras como medicina, ingeniería, derecho, pedagogía, psicología, entre muchas otras, contando con las herramientas necesarias para ser profesionales íntegros y ciudadanos comprometidos con la sociedad.
                        </p>
                    </div>  
                    <div className='p-4 my-auto'>
                        {/* COLOCAR UNA IMAGEN O UN CARROUSEL DE IMAGENES (PUEDEN SER LAS DE PUERTAS ABIERTAS) */}
                        <img src="/img-hc.avif" className='mx-auto object-cover w-140 h-120 bg-theme-blue-bg/70 p-2 rounded-2xl my-5 hidden lg:block' />
                    </div>
                </div>

                <div className='min-h-screen p-5'>
                    <Malla/>
                </div>   
            </div>
        </>
    )
}
